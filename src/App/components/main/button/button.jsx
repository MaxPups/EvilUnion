import style from './button.module.css';

export function ButtonMy ({name , getUrl}){
    return(
        <button className={style.btn} onClick={()=>{getUrl(name)}} onSubmit={()=>{getUrl(name)}}>{name}</button>
    )
}