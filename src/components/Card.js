import React from 'react'




class Card extends React.Component {


    render(){

        return (
        <div style={{border: "2px solid grey", 
                            height : "60vh",
                            borderRadius : "3%", 
                            width: "20em",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center", 
                            justifyContent:"space-evenly", 
                            boxShadow: "1px 2px 8px 2px #9CA6A4",
                            margin:"2% auto"}}>

           
           <img src={this.props.flag} style={{maxWidth: "60%", margin:"5%"}} alt="drapeau pays"></img>
           <h1>Country : {this.props.name} </h1> 
           <h2>Capital : {this.props.capital} </h2>
           <p>Population : {this.props.population}</p>
           <p>Region : {this.props.region}</p>
  

        </div>)
    }
}

export default Card;