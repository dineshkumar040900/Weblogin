 import React from "react";
 import './login.css';
 const login=()=>{
    return(
    <div class="container" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
    <h2>Please Sign In</h2>
    <input type="email" placeholder="email"/>
    <input type="password" placeholder="password"/>
    <h2>&nbsp;</h2>
    </div>
    </div>
    )
 }


 export default login;