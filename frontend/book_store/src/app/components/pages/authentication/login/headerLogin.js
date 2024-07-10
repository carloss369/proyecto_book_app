import style from "./headerLogin.module.css"

function HeaderLogin({title}){


    return (
        <div className={style.main}>
            <div className={style.conteiner}>
                <h1>{title}</h1>
                <div className={style.link}>
                <h3>Pagina Principal {">"} </h3><h2>{title}</h2>
                </div>
                
            </div>

        </div>

    );

}export default HeaderLogin;