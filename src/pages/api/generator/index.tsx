import { NextApiResponse, NextApiRequest } from 'next'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { theme } from '@/pages/_app'
import { ProfileInfo } from '@/global-types'
import {
  FRAMEWORKS_AND_LIBS,
  LANGUAGES,
  PREVIOUS_JOBS,
  SKILLS,
} from '@/constants'
import GeneratedReadme from '@/components/GeneratedReadme'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    theme: keyof typeof theme
    description: string
    developerType: string
    frameworksAndLibs: typeof FRAMEWORKS_AND_LIBS
    githubUsername: string
    languages: typeof LANGUAGES
    linkedIn: string
    name: string
    previousJobs: typeof PREVIOUS_JOBS
    skills: typeof SKILLS
    twitter: string
  }
}

function respondWithAttachingFile(
  contentBytes: Buffer,
  res: NextApiResponse,
  filename: string,
  filetype: string
): void {
  res.setHeader('Content-Type', `application/${filetype}`)
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`)

  res.status(200).end(contentBytes)
}

export default function handler(
  _req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const fileName = 'profile.svg'
  const sheet = new ServerStyleSheet()
  const profileInfo: ProfileInfo = {
    certifications: [],
    cv: '',
    email: '',
    instagram: '',
    stackoverflow: '',
    description: _req.body.description,
    developerType: _req.body.developerType,
    frameworksAndLibs: _req.body.frameworksAndLibs,
    githubUsername: _req.body.githubUsername,
    languages: _req.body.languages,
    linkedIn: _req.body.linkedIn,
    name: _req.body.name,
    previousJobs: _req.body.previousJobs,
    skills: _req.body.skills,
    twitter: _req.body.twitter,
  }
  const html = renderToString(
    sheet.collectStyles(
      <ThemeProvider theme={theme[_req.body.theme]}>
        <GeneratedReadme
          theme={{ textColor: 'white' }}
          profileInfo={profileInfo}
        />
      </ThemeProvider>
    )
  )
  const styleTags = sheet.getStyleTags()
  console.log('styleTags', styleTags)
  console.log('html', html)

  respondWithAttachingFile(
    Buffer.from(buildSvgProfile(styleTags, html)),
    res,
    fileName,
    'svg'
  )
}

function buildSvgProfile(styleTags: string, html: string) {
  return `<svg fill="none" viewBox="0 0 4000px 100%" width="100%" height="4000px" xmlns="http://www.w3.org/2000/svg" style="max-width: 846px; min-height:4000px">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${styleTags} 
          ${html}
        </div>
    </foreignObject>
</svg>`
}
