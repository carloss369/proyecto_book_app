import style from "./bookCard.module.css"


function BookCard(){

    return(

            <div className={conteiner}>
                <Image></Image>
                <h3>Aqui entra el autor</h3>
                <div className={style.info}>
                    <div className={style.stock}>
                        Aqui la cantidad de ejemplares
                    </div>
                    <div className={style.price}>
                        Aqui el precio
                    </div>

                </div>
            
            </div>


    );


}export default BookCard;