import react from "react"
import './Button.css'

class Button extends react.Component {
   
    render(){
        return(
            <>
            <div className='button-div'>
                <button onClick={() => this.props.clickButton()} style={{margin:"10px"}}> Button</button>
            </div>
            </>
        )
    }
}
 export default Button ;