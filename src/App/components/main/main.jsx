import style from './main.module.css';
import { useEffect, useState, useMemo } from 'react';
import { ButtonMy } from './button/button.jsx';
import { Card } from './card/card';
import axios from 'axios';
// import { Modal } from './modal/modal';
import Button from '@material-ui/core/Button';





export function Main() {

    // для рендеринга кнопок
    let [pokemon, setPokemon] = useState([]);
    // для рендеринга карточки
    let [card, setCard] = useState();
    // для popup
    let [modal, setModal] = useState();

    // делаем запрос для получение данных, которые заносим в кнопки
    useEffect(() => {
        let url2 = 'https://pokeapi.co/api/v2/ability/?limit=10'; 
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
                axios.get(url).then(resp => { setPokemon(resp.data.results); console.log(resp.data.results); });
    }, [])

    // функция срабатывает при клике на кнопку
    function getUrl(i) {
        axios.get(i.url).then(resp => { setCard(resp.data); console.log(resp.data) })
    }

    // стили для кнопки/material UI
    const styles = { borderRadius: '44px', background: '#1986EC', color: 'white', fontSize: '20px',  };


    return (
        <main className={style.main}>

            {/* {modal &&  <Modal card ={card} />} */}
            <div className={style.btns}>
                {/* {pokemon.map((i, index)=>{return  <ButtonMy name={i.name} key={index} getUrl ={getUrl} url={i.url}/> })} */}
                {pokemon.map((i, index) => {
                    return <Button variant="contained" style={styles} key={index} onClick={() => { getUrl(i) }}>
                        {i.name}
                    </Button>
                })}

            </div>
            <div className={style.block_card}>
                {/* {card && <Card obj={card}  />} */}

                {card ? <Card obj={card} /> : <div className={style.card}>
                    <h3>Выбери своего покемона</h3>
                    <img src='./img/pokemon.png'/>
                    </div>}

            </div>
          
        </main>
    )
}
