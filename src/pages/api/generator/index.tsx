import { NextApiResponse, NextApiRequest } from 'next'
import path from 'path'
import Demo from '../../demo'
import { renderToString } from 'react-dom/server'
import React from 'react'
import Home from '../../index'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { theme } from '@/pages/_app'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  console.log('_req', _req.body)

  const fileName = 'profile.svg'
  const sheet = new ServerStyleSheet()
  //const elementWithCollectedStyles = ServerStyleSheet.collectStyles(element);
  const html = renderToString(
    sheet.collectStyles(
      <ThemeProvider theme={theme[_req.body.theme]}>
        <Demo theme={{ textColor: 'white' }} />
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
    Buffer.from(
      buildSvgProfile(
        _req.body.name,
        _req.body.previousJobs,
        _req.body.skills,
        _req.body.frameworksAndLibs,
        _req.body.languages,
        _req.body.description,
        _req.body.linkedIn,
        _req.body.twitter,
        _req.body.githubUserName,
        _req.body.developerType,
        styleTags,
        html
      )
    ),
    res,
    fileName,
    'svg'
  )
  //return res.status(200).json(_req.body)
}

function buildSvgProfile(
  name: string,
  previousJobs: string[],
  skills: string[],
  frameworksAndLibs: { label: string; icon: string; iconType: string }[],
  languages: { label: string; icon: string; iconType: string }[],
  description: string,
  linkedIn: string,
  twitter: string,
  githubUserName: string,
  developerType: string,
  styleTags: string,
  html: string
) {
  const fs = require('fs')

  // using the readFileSync() function
  // and passing the path to the file

  //console.log(buffer);
  const dirRelativeToPublicStylesFile = 'profile-styles.css'

  const dirStyles = path.resolve('./public', dirRelativeToPublicStylesFile)

  console.log('dir', dirStyles)
  const loadedProfileStyles = fs.readFileSync(dirStyles)

  let softSkills = ''
  let frameworks = ''
  let companies = ''
  let myLanguages = ''

  skills?.forEach((skill) => {
    const element = `<div class="tag"><span>${skill}</span></div>\n`
    softSkills = softSkills + element
  })
  /*<img class="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${framework.icon}/${framework.icon}-${framework.iconType}.svg" />*/
  frameworksAndLibs?.forEach((framework) => {
    const element = `<li class="techContainer">
                      <span class="listItemText">${framework.label}</span>
                    </li>\n`
    frameworks = frameworks + element
  })

  previousJobs?.forEach((company) => {
    const element = `<div class="tag"><span>${company}</span></div>\n`
    companies = companies + element
  })
  /*<img class="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language.icon}/${language.icon}-${language.iconType}.svg" />*/
  languages?.forEach((language) => {
    const element = `<li class="techContainer">
                      <span class="listItemText">
                        ${language.label}
                      </span>
                    </li>\n`
    myLanguages = myLanguages + element
  })

  return `<svg fill="none" viewBox="0 0 4000px 100%" width="100%" height="4000px" xmlns="http://www.w3.org/2000/svg" style="max-width: 846px; min-height:4000px">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${styleTags} 
          ${html}
        </div>
    </foreignObject>
</svg>`
}

/*
<div xmlns="http://www.w3.org/1999/xhtml">
  <div className="container">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
    <h1 className="title">
      Hi there! My name is
      <span className="name">Martin Couso</span>
    </h1>
    <h2 className="subtitle">
      I am a <span className="developerType">${developerType}</span>
    </h2>
    <div className="intro">
      <h3 className="introTitle">A little about me:</h3>
      <p className="cardBody">
        ${description}
      </p>
    </div>

    <div className="gridContainer">
      <div className="card">
        <p className="cardTitle">
          My Soft Skills:
        </p>
        <div className="cardBodyTags">
          ${softSkills}
        </div>
      </div>

      <div className="cardLanguages">
        <p className="cardTitle">
          My Frameworks and Libraries of choose:
        </p>
        <ul className="listTech">
          ${frameworks}
        </ul>
      </div>

      <div className="card">
        <p className="cardTitle">
          Companies that I worked with:
        </p>
        <div className="cardBodyTags">
          ${companies}
        </div>
      </div>

      <div className="cardLanguages">
        <p className="cardTitle">
          My Preferred Languages
        </p>
        <ul className="listTech">
          ${myLanguages}
        </ul>
      </div>
    </div>

    <div>
      <h2 className="subtitle">Say Hi:</h2>
      <div className="socialMediaContainer">
        <a
            className="socialMediaItem"
            href="https://www.linkedin.com/in/${linkedIn}/"
        >
          LinkedIn
        </a>
        <a
            className="socialMediaItem"
            href="https://github.com/${githubUserName}"
        >
          Github
        </a>
        <a
            className="socialMediaItem"
            href="https://twitter.com/${twitter}"
        >
          Twitter
        </a>
      </div>
    </div>
  </div>
</div>*/
