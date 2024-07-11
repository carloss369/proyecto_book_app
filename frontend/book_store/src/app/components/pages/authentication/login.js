import HeaderLogin from "./login/headerLogin";
import SingUp from "./login/singUp";
import Or from "./login/or";

import style from "./login.module.css"
import Input from "./login/input";
import Button from "./login/button";
function Login(){

    return (
        <div className={style.conteiner}>
            <HeaderLogin title={"Login"}></HeaderLogin>
            <div className={style.main}>
                <SingUp></SingUp>
            <Or></Or>
            <Input title={"Email"}></Input>
            <Input className={style.input}  title={"Password"}></Input>
            <div className={style.text}>¿Olvidaste tu contraseña?</div>
            <Button text={"Log In"}></Button>
            </div>
            
        </div>
    );


}export default Login;