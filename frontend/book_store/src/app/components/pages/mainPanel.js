import style from "./mainPanel.module.css"

function MainPanel(){



    return(
        <div className={style.main}>
            <div className={style.title}>
                <h3>Realiza tus pedidos Online</h3>
                <h2>¿Que libros te interesan? Haz tus pedidos</h2>
                <button>Hacer un Pedido<i class="fas fa-arrow-right arrow"></i></button>
            </div>
        </div>
    );
}
export default MainPanel;