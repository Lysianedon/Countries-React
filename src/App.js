import React from 'react'
import Card from './components/Card'
import Searchbar from './components/Searchbar'
import './App.css'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      name : "",
      capital : "",
      flag : "",
      population : "",
      region : "",
      inputValue : "",
      visible : false,
    }
    //Bind functions
    this.getCountry = this.getCountry.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
  }

  //GETTING THE INPUT VALUE (COUNTRY)
  getSearchValue(e){

    let value = e.target.value;
    this.setState({inputValue : value})
    console.log(this.state.inputValue);
  }

  //GET COUNTRY VIA API RESTCOUNTRIES :

  getCountry(country){
    country = this.state.inputValue;

    if (country === "" || country === " ") {
          this.setState({visible : true})

          setTimeout(() => {
            this.setState({visible : false})
          }, 2500);
    }

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res)=> res.json())
    .then((res)=> {

      this.setState({name : res[0].name.common,
        capital : res[0].capital,
        flag : res[0].flags.png,
        population : res[0].population,
        region : res[0].region,
      })
    })
    .catch(error => {
      console.error(error)});
  }

  //UPDATE STATE ONCE IT IS MOUNTED WITH FRANCE'S DATA : 
  componentDidMount(){

    fetch('https://restcountries.com/v3.1/name/france')
    .then((res) => res.json())
    .then((res)=>{
      this.setState({name : res[0].name.common,
                    capital : res[0].capital,
                    flag : res[0].flags.png,
                    population : res[0].population,
                    region : res[0].region,
      })

    })
    .catch(error => console.error(error));
  }

  render() {

    return (<div className="div-app">
              <div style={{display: "flex", margin: "auto"}}>


              <Searchbar onClick={(e)=> {
                e.preventDefault();
                this.getCountry()}}

                getSearchValue={this.getSearchValue}/>
              </div>

              {
                this.state.visible === true ? 
                ( <p className = "error">Error : The field is empty. Enter a country.</p>)
                :
                (null)
              }

              <Card name={this.state.name} 
              capital={this.state.capital} 
              region={this.state.region}
              population={this.state.population}
              flag={this.state.flag}/>

            </div>)
  }
}


export default App;
