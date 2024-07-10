import style from "./input.module.css"


function Input({title}){


    return(
        <div className={style.conteiner}>
            <h3>{title}</h3>
            <input></input>
        </div>
    );


}export default Input;