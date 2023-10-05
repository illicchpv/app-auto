import styles from './Input.scss'

const Input = (props) => {
  const { type = 'text', placeholder = '' } = props;
  console.log('Input', styles)

  return (
    <input className={'aninput'}
      placeholder={placeholder}
      type={type} />)
}

export { Input }
