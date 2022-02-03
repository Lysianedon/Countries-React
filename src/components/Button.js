import React from 'react'

class Button extends React.Component {


    render(){

        return (
            <div>
                <button onClick={this.props.onClick}
                style={{width:"10em", 
                        height:"5em", 
                        borderColor : "1px solid black", 
                        marginRight : "1em"}}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button;