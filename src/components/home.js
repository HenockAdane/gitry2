import React from "react"
import "../component-css/home.css"



class Home extends React.Component{

    constructor(){
        super();
        this.state = []
    }




    render(){

        return(<div className="homeBody">

        <div className= "HImg1">

            <div className="intro">
                <h1>Hey, I'm Henock Adane and I love building beautiful websites</h1>
                <a href="#aboutMe"><div className="arrowDown"></div>ABOUT ME</a>
            </div>
        </div>

        </div>)
    }
    
}

export default Home