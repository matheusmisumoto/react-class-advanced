import React, { useContext } from "react";
import { ThemeContext, themes } from "./Theme";

function Form() {

    const context = useContext(ThemeContext);

    const renderForm = (
        <form>
            <label>Name: </label>
            <input style={{ background: context.background, color: context.color }} />
            <label>Email: </label>
            <input />
            <label>Age: </label>
            <input />
        </form>
    )

    const renderNotLogged = (
        <h1>Login required</h1>
    )

    return(
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form;