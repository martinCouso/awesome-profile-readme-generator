import { NextApiResponse, NextApiRequest } from 'next'
import Demo from '../../demo'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { theme } from '@/pages/_app'
import { ProfileInfo } from '@/global-types'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  console.log('_req', _req.body)

  const fileName = 'profile.svg'
  const sheet = new ServerStyleSheet()
  //const elementWithCollectedStyles = ServerStyleSheet.collectStyles(element);
  const profileInfo: ProfileInfo = {
    description: _req.body.description,
    developerType: _req.body.developerType,
    frameworks: _req.body.frameworks,
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
        <Demo theme={{ textColor: 'white' }} profileInfo={profileInfo} />
      </ThemeProvider>
    )
  )
  const styleTags = sheet.getStyleTags()
  console.log('styleTags', styleTags)
  console.log('html', html)
  const respondWithAttachingFile = (
    contentBytes: Buffer,
    res: NextApiResponse,
    filename: string,
    filetype: string
  ): void => {
    res.setHeader('Content-Type', `application/${filetype}`)
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`)

    res.status(200).end(contentBytes)
  }

  respondWithAttachingFile(
    Buffer.from(buildSvgProfile(styleTags, html)),
    res,
    fileName,
    'svg'
  )
  //return res.status(200).json(_req.body)
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
