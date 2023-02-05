import React, { useCallback } from 'react'
import { useField } from 'formik'
import styles from '../styles/InputCheckbox.module.css'
interface InputCheckboxInterface {
  icon: string
  name: string
  label: string
  iconType: string
}

const InputCheckbox: React.FC<InputCheckboxInterface> = ({
  icon,
  name,
  label,
  iconType,
}) => {
  const [field, meta, helpers] = useField(name)
  const { value } = meta

  const isSelected =
    value.filter((ele: { label: string; icon: string }) => ele.label === label)
      .length > 0
  const itemStyles = isSelected
    ? `${styles.container} ${styles.selectedItem}`
    : styles.container

  const onClick = useCallback(() => {
    if (isSelected) {
      helpers.setValue(
        value.filter(
          (item: { label: string; icon: string }) => item.label !== label
        )
      )
    } else {
      helpers.setValue([...value, { label, icon, iconType }])
    }
  }, [helpers, value, label, icon, isSelected])

  return (
    <button className={itemStyles} onClick={onClick} type="button">
      <i className={`devicon-${icon}-${iconType} ${styles.checkboxIcon}`}></i>
      <label className={styles.label}>{label}</label>
    </button>
  )
}

export default InputCheckbox
