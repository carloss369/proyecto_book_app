import HeaderLogin from "./login/headerLogin";
import SingUp from "./login/singUp";
import Or from "./login/or";

import style from "./login.module.css"
import Input from "./login/input";
function Login(){

    return (
        <div className={style.conteiner}>
            <HeaderLogin title={"Login"}></HeaderLogin>
            <SingUp></SingUp>
            <Or></Or>
            <Input title={"Email"}></Input>
            <Input title={"Password"}></Input>

        </div>
    );


}export default Login;