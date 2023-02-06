import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { useField } from 'formik'
import styles from '../styles/InputText.module.css'
interface FieldRequiredProps {
  name: string
  label: string
}
type InputTextInterface = FieldRequiredProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >

const InputText: React.FC<InputTextInterface> = (props) => {
  const [field, meta] = useField(props.name)
  return (
    <>
      <div className={styles.container}>
        <label
          className={styles.label}
          htmlFor={props.name}
          id={`${props.name}-label`}
        >
          {props.label}
        </label>
        {props.type !== 'textarea' ? (
          <input
            {...field}
            {...props}
            className={styles.inputText}
            aria-labelledby={`${props.name}-label`}
          />
        ) : (
          <textarea
            style={{ borderStyle: 'solid' }}
            {...field}
            {...props}
            className={styles.inputText}
            rows={3}
            cols={40}
            aria-labelledby={`${props.name}-label`}
          />
        )}
        {meta.error && meta.touched && (
          <span className={'inputErrorMessage'}>{meta.error}</span>
        )}
      </div>
    </>
  )
}

export default InputText
