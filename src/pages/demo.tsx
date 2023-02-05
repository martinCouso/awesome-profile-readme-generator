import React, { Key } from 'react'
import {
  FRAMEWORKS_AND_LIBS,
  LANGUAGES,
  SKILLS,
  PREVIOUS_JOBS,
} from '@/constants'
import { Theme, ThemeNames } from '@/global-types'
import DemoContainer from '../components/DemoContainer'
import DemoTitle from '../components/DemoTitle'
import AccentColoredText from '../components/AccentColoredText'
import DemoSubtitle from '@/components/DemoSubtitle'
import IntroContainer from '@/components/IntroContainer'
import IntroTitle from '@/components/IntroTitle'
import IntroText from '@/components/IntroText'
import GridContainer from '@/components/GridContainer'
import DemoCard from '@/components/DemoCard'
import DemoCardTitle from '@/components/DemoCardTitle'
import DemoCardIcon from '@/components/DemoCardIcon'
import DemoList from '@/components/DemoList'
import TechListContainer from '@/components/TechListContainer'
import TechItem from '@/components/TechItem'
import TechItemText from '@/components/TechItemText'
import DemoCardTagsContainer from '@/components/DemoCardTagsContainer'
import Tag from '@/components/Tag'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import SocialLink from '@/components/SocialLink'
import { theme as availableThemes } from './_app'
interface ProfileProps {
  theme: Theme
  profileInfo: {
    frameworks: typeof FRAMEWORKS_AND_LIBS
    languages: typeof LANGUAGES
    name: string
    linkedIn: string
    skills: string[]
    previousJobs: string[]
    githubUsername: string
    twitter: string
    description: string
    developerType: string
  }
}

const Demo: React.FC<ProfileProps> = ({
  theme = availableThemes[ThemeNames.LIGHT],
  profileInfo: {
    frameworks = FRAMEWORKS_AND_LIBS,
    languages = LANGUAGES,
    name = 'Martin Couso',
    linkedIn = 'cousomartin',
    skills = SKILLS,
    description = ' Martín Couso is a Software Engineer at Utopyk, where he leads and develops website projects, mobile applications and XR experiences. He loves evangelize about innovating technologies  and find ways to apply them in real life scenarios.',
    previousJobs = PREVIOUS_JOBS,
    developerType = 'Sr React Native Developer',
    githubUsername = 'martinCouso',
    twitter = 'martin_couso',
  },
}) => {
  console.log('theme.textColor', theme)

  return (
    <DemoContainer>
      <DemoTitle>Hi there! My name is</DemoTitle>
      <DemoTitle>
        <AccentColoredText>{name}</AccentColoredText>
      </DemoTitle>
      <DemoSubtitle>
        I am a <AccentColoredText>{developerType}</AccentColoredText>
      </DemoSubtitle>
      <IntroContainer>
        <IntroTitle>A little about me:</IntroTitle>
        <IntroText>{description}</IntroText>
      </IntroContainer>

      <GridContainer>
        <DemoCard>
          <DemoCardTitle>
            <DemoCardIcon>
              <AccentColoredText>&#9876;</AccentColoredText>
            </DemoCardIcon>
            My Soft Skills:
          </DemoCardTitle>
          <DemoCardTagsContainer>
            {skills.map((tag) => (
              <Tag key={tag as Key}>
                <span key={tag as Key}>{tag}</span>
              </Tag>
            ))}
          </DemoCardTagsContainer>
        </DemoCard>

        <DemoList>
          <DemoCardTitle>
            <DemoCardIcon>&#9883;</DemoCardIcon>
            My Frameworks and Libraries of choose:
          </DemoCardTitle>
          <TechListContainer>
            {frameworks.map((language) => (
              <TechItem key={language.label}>
                <TechItemText>{language.label}</TechItemText>
              </TechItem>
            ))}
          </TechListContainer>
        </DemoList>

        <DemoCard>
          <DemoCardTitle>
            <AccentColoredText>
              <DemoCardIcon>&#9963;</DemoCardIcon>
            </AccentColoredText>
            Companies that I worked with:
          </DemoCardTitle>
          <DemoCardTagsContainer>
            {previousJobs.map((company) => (
              <Tag key={company as Key}>
                <span key={company as Key}>{company}</span>
              </Tag>
            ))}
          </DemoCardTagsContainer>
        </DemoCard>

        <DemoList>
          <DemoCardTitle>
            <AccentColoredText>
              <DemoCardIcon>&#9832;</DemoCardIcon>
            </AccentColoredText>
            My Preferred Languages
          </DemoCardTitle>
          <TechListContainer>
            {languages.map((language) => (
              <TechItem key={language.label}>
                <TechItemText>{language.label}</TechItemText>
              </TechItem>
            ))}
          </TechListContainer>
        </DemoList>
      </GridContainer>

      <div>
        <DemoSubtitle>Say Hi:</DemoSubtitle>
        <SocialMediaContainer>
          <SocialLink href={`https://www.linkedin.com/in/${linkedIn}/`}>
            LinkedIn
          </SocialLink>
          <SocialLink href={`https://github.com/${githubUsername}`}>
            Github
          </SocialLink>
          <SocialLink href={`https://twitter.com/${twitter}`}>
            Twitter
          </SocialLink>
        </SocialMediaContainer>
      </div>
    </DemoContainer>
  )
}

export default Demo
