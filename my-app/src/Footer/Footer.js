import './Footer.css';
import React, {useState} from 'react';
function Footer (){
    const randNumber = Math.round(Math.random()*10); //Рандомне число
    const [user, setUser] = useState(' ');
    function alertShow (){
        alert (user +"," + " " + "your lucky number is:" + " " + randNumber);
    }
    return(
        <div className="Footer-app">
            <h2> Enter your name </h2>
            <div className="Input">
                <input type = "text" value = {user} 
                onChange = {(e) => setUser(e.target.value)}
                />
                <button onClick = {alertShow}> Ok </button>
            </div>
        </div>
    )
    }
    
    export default Footer;