import React from 'react'


class Searchbar extends React.Component {

    render(){

        return(
            <form 
            onSubmit={this.props.onClick}
            style={{margin:"1% auto", 
                    display: "flex", 
                    flexDirection:"column"}}>

                <label for="country">Enter a country : </label>
                
                <input 
                className="searchbar"
                placeholder="Brazil, Cameroun..."
                onKeyUp={this.props.getSearchValue}
                type="text" 
                name="country"></input>

                <button type="submit"
                        onClick={this.props.onClick}
               style={{ 	boxShadow:"inset 0px 1px 6px 0px #ffffff",
                            background:"linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%)",
                            borderRadius:"6px",
                            border:"1px solid #dcdcdc",
                            display:"block",
                            cursor:"pointer",
                            fontFamily:"Arial",
                            fontSize:"28px",
                            fontWeight:"bold",
                            padding:"6px 24px",
                            textDecoration:"none",
                            textShadow:"0px 1px 0px #ffffff",
                            margin: "1% 0% 0 20%",
                            width:"60%",}}>Search</button>
            </form>
        )
    }
}


export default Searchbar;