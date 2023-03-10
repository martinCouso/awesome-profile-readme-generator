import { FRAMEWORKS_AND_LIBS, LANGUAGES } from '@/constants'

export enum ThemeNames {
  LIGHT = 'light',
  DARK = 'dark',
  AWESOME = 'awesome',
}

export type Theme = {
  textColor: string
}

export type ProfileInfo = {
  frameworksAndLibs?: typeof FRAMEWORKS_AND_LIBS
  languages?: typeof LANGUAGES
  name: string
  linkedIn?: string
  skills?: string[]
  previousJobs?: string[]
  githubUsername: string
  twitter?: string
  description: string
  developerType: string
  cv?: string
  instagram?: string
  stackoverflow?: string
  email?: string
  certifications?: string[]
}
