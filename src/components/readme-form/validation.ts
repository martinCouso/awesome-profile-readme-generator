import * as Yup from 'yup'

export const validation = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  githubUserName: Yup.string()
    .max(25, 'Must be 25 characters or less')
    .required('Required'),
  developerType: Yup.string()
    .max(35, 'Must be 35 characters or less')
    .required('Required'),
  description: Yup.string()
    .max(200, 'Must be 200 characters or less')
    .required('Required'),
  cv: Yup.string().max(200, 'Must be 200 characters or less'),
  linkedIn: Yup.string().max(30, 'Must be 30 characters or less'),
  twitter: Yup.string().max(35, 'Must be 35 characters or less'),
  instagram: Yup.string().max(35, 'Must be 35 characters or less'),
  stackoverflow: Yup.string().max(35, 'Must be 35 characters or less'),
  email: Yup.string().max(35, 'Must be 35 characters or less'),
  skills: Yup.array().of(Yup.string()).nullable(true),
  certifications: Yup.array().nullable(true),
  previousJobs: Yup.array().nullable(true),
  languages: Yup.array().nullable(true),
  frameworksAndLibs: Yup.array().nullable(true),
})
