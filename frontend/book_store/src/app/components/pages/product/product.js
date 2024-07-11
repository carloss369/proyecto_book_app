import style from "./product.module.css"
import TopMenu from "../topMenu";
import Options from "../options";
import HeaderLogin from "../authentication/login/headerLogin";
import ConteinerProduct from "./conteinerProduct";
import Title from "./title";
import Detail from "./detail";
import Info from "../homepage/info";
import Footer from "../homepage/footer";
function Product(){


    return (
        <div className={style.main}>
            
            <TopMenu></TopMenu>
            <Options></Options>
            <Title title={"nombre del producto"}></Title>
            <div className={style.product}>
            <ConteinerProduct title={"nombre del producto"}
                                price={"$$$$"}
                                author={"nombre del autor"}
                                editorial={"editorial"}
                                numberPages={"numero"}
                                bookbinding={"clasico"}
                                copies={"numero de copias"}></ConteinerProduct>
            <Detail detail={"Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection. The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit."}></Detail>
            </div>
       
            <Footer></Footer>
            <Info></Info>
        </div>)


}
export default Product;