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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField(name)
  const { value } = meta

  const isSelected =
    value?.filter((ele: { label: string; icon: string }) => ele.label === label)
      .length > 0
  const itemStyles = isSelected
    ? `${styles.container} ${styles.selectedItem}`
    : styles.container

  const onClick = useCallback(() => {
    if (isSelected) {
      helpers.setValue(
        value?.filter(
          (item: { label: string; icon: string }) => item.label !== label
        )
      )
    } else {
      helpers.setValue(
        value
          ? [...value, { label, icon, iconType }]
          : [{ label, icon, iconType }]
      )
    }
  }, [isSelected, helpers, value, label, icon, iconType])

  return (
    <button className={itemStyles} onClick={onClick} type="button">
      <i className={`devicon-${icon}-${iconType} ${styles.checkboxIcon}`}></i>
      <label className={styles.label}>{label}</label>
    </button>
  )
}

export default InputCheckbox
