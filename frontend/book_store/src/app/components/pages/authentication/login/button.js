import style from "./button.module.css"


function Button({text}){

    return(
        <div className={style.button}>
            <button>{text}</button>

        </div>
    );

}export default Button;