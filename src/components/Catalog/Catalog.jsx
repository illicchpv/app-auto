import { useEffect, useState } from "react";

import './Catalog.scss';
import gear from '../../assets/icons/gear.svg'
import belt from '../../assets/icons/belt.svg'
import wheel from '../../assets/icons/wheel.svg'
import { Button } from '../Button'

const Catalog = (props) => {
  const { text = '' } = props;

  // const itemsArr = require('./info.json');
  // console.log('itemsArr', itemsArr)

  const [itemsArr, setItemsArr] = useState()
  const fetchJson = () => {
    fetch('./catalog/info.json')
      .then(resp => {
        return resp.json();
      }).then(resp => {
        setItemsArr(resp);
      }).catch((e) => {
        console.log(e.message);
      });
  }
  useEffect(() => {
    fetchJson()
  }, [])


  const base = './catalog/'

  return (
    <div className={'container container_catalog'}>
      <div className={'catalog'}>
        <h2>{text}</h2>
        <div className="catalog__grid">
          {itemsArr?.map((item) => {
            return (
              <div className="catalog__item">
                <img src={base + item.id + ".png"} alt={"qqq"} />

                <p className="catalog__itemName">
                  {item.name}
                </p>

                <div className="catalog__itemSpecArr">
                  <div className="catalog__itemSpec catalog__itemSpecGear">
                    <img src={gear} />
                    <h5>Привод</h5>
                    <p>{item.gear}</p>
                  </div>
                  <div className="catalog__itemSpec catalog__itemSpecWheel">
                    <img src={wheel} />
                    <h5>Двигатель</h5>
                    <p>{item.wheel} л.с.</p>
                  </div>
                  <div className="catalog__itemSpec catalog__itemSpecBelt">
                    <img src={belt} />
                    <h5>Кол-во мест</h5>
                    <p>{item.belt}</p>
                  </div>
                </div>

                <Button mod='catalog' text='забронировать' />

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { Catalog }
