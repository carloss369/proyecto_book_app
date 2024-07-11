import HeaderLogin from "./login/headerLogin";
import SingUp from "./login/singUp";
import Or from "./login/or";
import style from "./register.module.css"
import Input from "./login/input";
import Button from "./login/button";

function Register(){
    return(
        <div className={style.conteiner}>
            <HeaderLogin title={"Sign up"}></HeaderLogin>
            <div className={style.main}>
            <SingUp></SingUp>
            <Or></Or>
            <Input className={style.input} title={"Username"}></Input>
            <Input className={style.input} title={"Email"}></Input>
            <Input className={style.input}  title={"Password"}></Input>
            <div className={style.text}>¿Olvidaste tu contraseña?</div>
            <div className={style.politicas}>
            <p>Al crear una cuenta, acepta nuestros Términos de servicio, Política de privacidad </p>
            </div>
            
            <Button text={"Crear Cuenta"}></Button>

            </div>
            
        </div>
    );

}export default Register;