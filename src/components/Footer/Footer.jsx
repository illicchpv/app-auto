import './Footer.scss';
import logo from '../../assets/icons/logo.png'

const Footer = (props) => {
  // const { text = '' } = props;

  return (
    <div className={'container container_footer'}>
      <footer className={'footer'}>
        <img src={logo} alt="logo" />

        <p>Все права защищены</p>
      </footer>
    </div>
  )
}


export { Footer }
