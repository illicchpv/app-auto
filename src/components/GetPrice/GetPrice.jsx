import './GetPrice.scss';
import bg from '../../assets/img/getPrice-bg.png'
import { Input } from '../Input'
import { Button } from '../Button'

const GetPrice = (props) => {
  // const { text = '' } = props;

  return (
    <div className={'container container_getPrice'}>
      <div className={'getPrice'} style={{ backgroundImage: `url(${bg})` }}>
        <h2>Узнать цену и забронировать</h2>
        <p>Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования</p>

        <div className="getPrice__inputBlock">

          <Input placeholder='Ваше имя'></Input>
          <Input placeholder='Ваш телефон'></Input>
          <Input placeholder='Автомобиль, который вас интересует'></Input>

          <Button mod='getPrice' text='узнать цену' />
        </div>

      </div>
    </div>
  )
}

export { GetPrice }
