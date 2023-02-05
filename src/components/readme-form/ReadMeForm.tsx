import React from 'react'
import { Form, Formik } from 'formik'
import { validation } from './validation'
import InputCheckbox from '@/components/InputCheckbox'
import InputText from '@/components/InputText'
import InputTag from '@/components/TagInput'
import { FRAMEWORKS_AND_LIBS, LANGUAGES } from '@/constants'
import styles from '../../styles/ReadMeForm.module.css'

const initialState = {
  name: '',
  githubUserName: '',
  developerType: '',
  description: '',
  cv: '',
  linkedIn: '',
  twitter: '',
  instagram: '',
  stackoverflow: '',
  email: '',
  skills: [],
  certifications: [],
  previousJobs: [],
  languages: [],
  frameworksAndLibs: [],
}

const ReadMeForm: React.FC = ({}) => {
  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values', values)
          alert(JSON.stringify({ theme: 'awesome', ...values }, null, 2))
          fetch('http://localhost:3000/api/generator', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ theme: 'awesome', ...values }),
          })
            .then((response) => response.blob())
            .then((responseBlob) => {
              console.log('response', responseBlob)
              setSubmitting(false)
              //const buffer = Buffer.from(response.body)
              const blob = new Blob([responseBlob])

              const url = window.URL.createObjectURL(blob)
              const a = document.createElement('a')
              document.body.appendChild(a)
              a.href = url
              a.download = 'profile.svg'
              a.click()
              window.URL.revokeObjectURL(url)
            })
            .catch((err) => {
              console.log('err', err)
              setSubmitting(false)
            })
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>
              About{' '}
              <span className={styles.sectionTitleAccentVariation}>You</span>
            </h2>
            <div className={styles.firstSectionContainer}>
              <InputText
                type="text"
                name="name"
                label={'Hi there, my name is '}
              />
              <InputText
                type="text"
                name="githubUserName"
                label={'My GitHub username is'}
              />
              <InputText
                type="text"
                name="developerType"
                label={'I am a'}
                placeholder={'i.e. Sr Full-Stack developer'}
              />
              <InputText
                type="textarea"
                name="description"
                label={'A little about me: '}
              />
              <InputText
                type="text"
                name="cv"
                label={'You can check my full cv at: '}
              />
              <InputText
                type="text"
                name="linkedIn"
                label={'My LinkedIn profile is: '}
              />
              <InputText
                type="text"
                name="twitter"
                label={'My Twitter account is: '}
              />
              <InputText
                type="text"
                name="instagram"
                label={'My Instagram profile is: '}
              />
              <InputText
                type="text"
                name="stackoverflow"
                label={'My Stackoverflow user is: '}
              />
              <InputText
                type="email"
                name="email"
                label={'My email address is: '}
              />

              <InputTag
                name="skills"
                label={'Add your skills: '}
                placeholder={'i.e. leadership'}
              />
              <InputTag
                name="certifications"
                label={'My certifications: '}
                placeholder={'i.e. AWS Certified Developer - Associate '}
              />
              <InputTag
                name="previousJobs"
                label={'My past companies: '}
                placeholder={'i.e. Google'}
              />
            </div>
            <h2 className={styles.sectionTitle}>
              Pick your
              <span className={styles.sectionTitleAccent}>Languages</span>
            </h2>
            <div className={styles.checkboxContainer}>
              {LANGUAGES.map(
                (language: {
                  label: string
                  icon: string
                  iconType: string
                }) => (
                  <InputCheckbox
                    label={language.label}
                    icon={language.icon}
                    key={language.label}
                    name={'languages'}
                    iconType={language.iconType}
                  />
                )
              )}
            </div>
            <h2 className={styles.sectionTitle}>
              Pick your favorite{' '}
              <span className={styles.sectionTitleAccentVariation}>
                Frameworks and Libraries
              </span>
            </h2>
            <div className={styles.checkboxContainer}>
              {FRAMEWORKS_AND_LIBS.map(
                (language: {
                  label: string
                  icon: string
                  iconType: string
                }) => (
                  <InputCheckbox
                    label={language.label}
                    icon={language.icon}
                    iconType={language.iconType}
                    key={language.label}
                    name={'frameworksAndLibs'}
                  />
                )
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="primaryButton"
            >
              Generate
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ReadMeForm
