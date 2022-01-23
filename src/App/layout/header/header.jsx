import style from './header.module.css';

export function Header() {


    return (
        <header className={style.header}>
            <div className={style.title}>Покемоны API</div>
            <div className={style.block}>
                <img src='./img/icon.png' />
                <div>Нажмите на
                    нужное Покемона</div>
            </div>
        </header>
    )
}