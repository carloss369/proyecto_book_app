import style from "./options.module.css"

function Options(){


    return (
        <div className={style.header}>
            <div className={style.menu}>
                <div className={style.left}>
                    <div className={style["logo-container"]}>
                        <img src="../logo2.svg"></img>
                        <h3>Libreria</h3>
                    </div>
                    <div className={style.navigation}>
                        <p>Inicio</p>
                        <div className={style.category}>Categorias
                            <ul className={style.lista}>
                                <li>Arte</li>
                                <li>Ciencia</li>
                                <li>Clasicos</li>
                                <li>Deporte</li>
                                <li>Drama</li>
                                <li>Terror</li>
                                <li>Manga</li>
                                <li>Religion</li>
                                <li>Romance</li>
                                <li>Historia</li>
                            </ul>
                        </div>
                        <p>Acerca de</p>
                        <p>Contactanos</p>
                    </div>
                    
                </div>
                <div className={style.right}>
                    <div className={style.input}>
                        <button className={style.btn}>
                            <i className="fas fa-search"></i>
                        </button>
                        <input className={style.in} placeholder="Busca un libro"></input>
                        <button className={style.btn}> <i className="fas fa-user"></i></button>
                        <button className={style.btn}> <i className="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>

    );
}export default Options;