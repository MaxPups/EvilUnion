import style from './card.module.css';
import Button from '@material-ui/core/Button';

export function Card({ obj }) {

    return (
        <div className={style.card}>
        
            <h2 className={style.title}>{obj.name}</h2>
            <img src={obj.sprites.other.dream_world.front_default} alt={`pokemon ${obj.name}`} className={style.img} />
            <ul className={style.lists}>
                <li>Снялся в {obj.moves.length ? obj.moves.length: ' неизвестно'} сериях</li>
                <li>id: {obj.id}</li>
                <li>height: {obj.height ? obj.height : ' неизвестно'}</li>
                <li>attack: {obj.stats[1].base_stat ? obj.stats[1].base_stat: ' неизвестно'}</li>
            </ul>
        </div>
    )
}