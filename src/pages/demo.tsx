import React from 'react'
import {
  FRAMEWORKS_AND_LIBS,
  LANGUAGES,
  SKILLS,
  PREVIOUS_JOBS,
} from '@/constants'
import { ThemeNames } from '@/global-types'

import { themes } from './_app'
import GeneratedReadme from '@/components/GeneratedReadme'

const Demo: React.FC = () => {
  return (
    <GeneratedReadme
      theme={themes[ThemeNames.AWESOME]}
      profileInfo={{
        frameworksAndLibs: FRAMEWORKS_AND_LIBS,
        languages: LANGUAGES,
        name: 'Martin Couso',
        linkedIn: 'cousomartin',
        skills: SKILLS,
        description:
          ' Martín Couso is a Software Engineer at Utopyk, where he leads and develops website projects, mobile applications and XR experiences. He loves evangelize about innovating technologies  and find ways to apply them in real life scenarios.',
        previousJobs: PREVIOUS_JOBS,
        developerType: 'Sr React Native Developer',
        githubUsername: 'martinCouso',
        twitter: 'martin_couso',
      }}
    />
  )
}

export default Demo
