import style from "./bestSeller.module.css"
import BookCard from "./bookCard";

function BestSeller(){


    return(
    
    <div className={style.main}>
    
            <h4>COMPRA AHORA</h4>
            <h2>Mas Vendidos</h2>

            <BookCard></BookCard>
    
    </div>);

}export default BestSeller;