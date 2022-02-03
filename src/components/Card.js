import React from 'react'

class Card extends React.Component {


    render(){

        return (<div style={{border: "1px solid black", 
        height : "50vh", 
        width: "20%", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"space-evenly", 
        flexDirection : "column"}}>

            {this.props.name}
            {this.props.capital}
            {this.props.flag}
            {this.props.population}
            {this.props.region}

        </div>)
    }
}

export default Card;