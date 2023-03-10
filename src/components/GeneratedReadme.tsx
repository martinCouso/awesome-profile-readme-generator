import React, { Key } from 'react'
import { ProfileInfo, Theme } from '@/global-types'
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
interface ProfileProps {
  theme: Theme
  profileInfo: ProfileInfo
}

const Demo: React.FC<ProfileProps> = ({
  profileInfo: {
    frameworksAndLibs,
    languages,
    name,
    linkedIn,
    skills,
    description,
    previousJobs,
    developerType,
    githubUsername,
    twitter,
  },
}) => {
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
            {skills?.map((tag) => (
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
            {frameworksAndLibs?.map((framework) => (
              <TechItem key={framework.label}>
                <TechItemText>{framework.label}</TechItemText>
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
            {previousJobs?.map((company) => (
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
          {languages?.length && (
            <TechListContainer>
              {languages.map((language) => (
                <TechItem key={language.label}>
                  <TechItemText>{language.label}</TechItemText>
                </TechItem>
              ))}
            </TechListContainer>
          )}
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
