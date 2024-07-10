import style from "./bookCard.module.css"
import { useState,useEffect } from "react"

function BookCard(){
    const [data,setData]=useState([])
    useEffect(()=>{
      fetch('http://127.0.0.1:5000/api/books/4').
      then(res=>res.json()).
      then(data=>{
        setData(data)
      })
    },[])
    console.log(data)
    
    return(

            <div className={style.conteiner}>
                <img src={`./covers/${data.title}.jpg`}></img>
                <div className={style.details}>
                <h3>{data.title}</h3>
                <div className={style.info}>
                    <div className={style.stock}>
                        DISPONIBLES: {data.copies}
                    </div>
                    <div className={style.price}>
                        {data.price}. Bs
                    </div>

                </div>
                </div>
              
            
            </div>


    );


}export default BookCard;