import React, {useState} from 'react'
import styles from './styles.module.css'

const Button = () => {

  const [text, setText] = useState('Click me!');

  const handleClick = () => {
    setText('You clicked me!');
  };

  return (
    <button className={styles.primary} onClick={handleClick}>{text}</button>
  )
}

export default Button