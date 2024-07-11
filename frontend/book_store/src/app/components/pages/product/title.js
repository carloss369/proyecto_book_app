
import style from "./title.module.css"
function Title({title}){



    return(
        <div className={style.main}>
            <p>Pagina principal</p>
            <p> {">"}</p>
            <h3>{title}</h3>
        </div>
    );
}
export default Title;