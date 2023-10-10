import './About.scss';
import bg from '../../assets/img/background.jpg'
import { Button } from '../Button'
const About = (props) => {
  // const { text = '' } = props;
  console.log('bg', bg)

  //style={{ backgroundImage: `url(${bg})` }}
  return (
    <div className={'about'} style={{ backgroundImage: `url(${bg})` }}>
      <div className={'container container_about'}>
        <h1>
          Аренда премиальных автомобилей.
        </h1>
        <p>
          В нашем клубе имеется солидная коллекция спортивных
          автомобилей — от достаточно распространенных серийных
          машин до настоящего гоночного эксклюзива. Воспользуйтесь
          уникальной возможностью побывать за рулем настоящей
          легенды и узнать, на что она способна за пределами гоночной
          трассы!
        </p>
        <Button mod={'about'} text={'Посмотреть автомобили'} />
      </div>
    </div>
  )
}


export { About }
