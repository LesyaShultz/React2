import './Main.css';
import text from '../datatext/text.json'

function Main (){
    function mouseMove(){
        let mainApp = document.querySelectorAll('section')
        for(let i=0; i< mainApp.length; i++ ){        
        mainApp[i].style.background = 'yellow';}
    }

    function mouseOut(){
        let mainOut = document.querySelectorAll('section')
        for(let i=0; i< mainOut.length; i++ ){        
            mainOut[i].style.background = 'white';}
    }

    
    return(
        <div className="Main-app">
            <div className='Main-app_block' >
            {text.map(item=>
            <section  onMouseMove = {mouseMove} onMouseOut= {mouseOut}>
            <h2>{item.title}</h2>
            <div className='MainText'>
            {item.body}
            </div>
            </section>
             )
            }
            </div>
        </div>
    )
    }
    
    export default Main;