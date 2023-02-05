import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useCallback, useRef, useState} from 'react';
import {useField} from 'formik';
import styles from '../styles/InputTag.module.css'
interface FieldRequiredProps {
    name: string;
    label: string;
}
import {AiOutlineCloseCircle} from 'react-icons/ai'
type InputTagInterface = FieldRequiredProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const InputTag: React.FC<InputTagInterface> = ({name,label,...props}) => {
    const [field, meta, helpers] = useField(name);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputVal, setInputVal] = useState('')
    const { value } = meta;
    const { setValue } = helpers;

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter'){
            event.preventDefault();
            onAdd()
        }
    }

    const onAdd = useCallback(
        () => {
            if(!value.includes(inputRef.current?.value)){
                setValue([...value, inputVal])
                setInputVal('');
            }
        },
        [setValue, value],
    );


    return (
        <div style={{width:'100%'}}>
            <div className={styles.container}>
                <label>{label}</label>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input
                    placeholder={props.placeholder}
                    type="text"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    value={inputVal}
                    onChange={(event)=>{setInputVal(event.target.value)}}
                />
                <button type="button" onClick={onAdd} className={styles.addButton} >Add</button>
                </div>
            </div>
            <div className={styles.tagsContainer}>
                {value.map((tag:string)=>(
                    <Tag
                        tag={tag}
                        key={tag}
                        onRemove={(selectedTag)=>{setValue(value.filter((el:string)=>el !== selectedTag))}}
                    />))
                }
            </div>
        </div>
    );
};

const Tag = ({tag, onRemove} :{tag:string, onRemove:(tag:string)=>void}) =>{

    return(<div className={styles.tag}>
        <span  key={tag}>{tag}</span>
        <button type={'button'} className={styles.removeButton} onClick={()=>{onRemove(tag)}}><AiOutlineCloseCircle style={{background:'transparent', color:'black'}}/></button>
    </div>)
}

export default InputTag;
