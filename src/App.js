import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

const france = "france";
const brazil = "brasil";
const croatia = "croatia";

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      name : "",
      capital : "",
      flag : "",
      population : "",
      region : "",
    }
    //Bind functions
    this.getCountry = this.getCountry.bind(this);
  }

  getCountry(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res)=> res.json())
    .then((res)=> {

      this.setState({name : res[0].name.common,
        capital : res[0].capital,
        flag : res[0].flag,
        population : res[0].population,
        region : res[0].region,
      })
    })
  }

  componentDidMount(){

    fetch('https://restcountries.com/v3.1/name/france')
    .then((res) => res.json())
    .then((res)=>{
      this.setState({name : res[0].name.common,
                    capital : res[0].capital,
                    flag : res[0].flag,
                    population : res[0].population,
                    region : res[0].region,
      })

    })
  }

  render() {

    return (<div>
              <div style={{display: "flex", margin: "auto"}}>

              <Button onClick={this.getCountry(france)}>France</Button>
              <Button onClick={this.getCountry(brazil)}>Brazil</Button>
              <Button onClick={this.getCountry(croatia)}>Croatia</Button> 

              </div>

              <Card name={this.state.name} 
              capital={this.state.capital} 
              region={this.state.region}
              population={this.state.population}
              flag={this.state.flag}/>
            </div>)
  }
}


export default App;
