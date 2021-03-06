import React from "react"
import "../component-css/projectDiv.css"

class ProjectDiv2 extends React.Component{



    // componentDidMount(){
    //      gsap.from(".two", {x:"50vw", duration: 0.3})
  
    // }


    render(){
        return(
            <div className="projectContainer two">
                <div className="projectDescription">
                    <h1>{this.props.h1}</h1>

                    <p>{this.props.description}</p>

                    <o className="type">{this.props.type}</o>
                    <o className="used">{this.props.used}</o>
                    {this.props.link ? (<a href={this.props.link} rel="noopener noreferrer" target="_blank">Visit Site</a>) : false}
                </div>
                <img className="projectImg" alt="1" src={this.props.img} />

            </div>
        )
    }
}

export default ProjectDiv2
