import './Button.scss';

const Button = (props) => {
  const { text = '', mod = '' } = props;
  let bmod = mod ? 'button_' + mod : '';
  return <button className={'button ' + bmod}>{text}</button>
}


export { Button }
