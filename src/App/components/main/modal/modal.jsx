import style from './modal.module.css';


export function Modal({ obj }) {
    return (
        <div className={style.card}>
            <h2 className={style.title}>{obj.name}</h2>
            <img src="./img/picture.png" alt={obj.name} className={style.img} />
            <ul className={style.lists}>
                <li>Снялся в{obj.count ? obj.count : ' неизвестно'} сериях</li>
                <li>id: {obj.id}</li>
                <li>height: {obj.height ? obj.height : ' неизвестно'}</li>
                <li>attack: {obj.attack ? obj.attack : ' неизвестно'}</li>
            </ul>



        </div>
    )
} 