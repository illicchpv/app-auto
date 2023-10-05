// import styles from './Header.scss'
import './Header.scss';
import logo from '../../assets/icons/logo.png'

const Header = (props) => {
  const { text = '' } = props;
  // console.log('Header', styles)

  return (
    <div className={'container container_header'}>
      <header className={'header'}>
        <img src={logo} alt="logo" />

        <nav>
          <ul className={'header__navList'}>
            <li><a href="">Главная</a></li>
            <li><a href="">Автомобили</a></li>
            <li><a href="">Бронирование&nbsp;авто</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}


export { Header }
