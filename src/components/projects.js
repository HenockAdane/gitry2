import React from "react"
import { gsap } from "gsap"
import ProjectDiv1 from "./projectDiv1"
import ProjectDiv2 from "./projectDiv2"


class Projects extends React.Component{
    
    constructor(){
        super()
        this.state = {
            projectDetails:[
            {
                project: "Photosnap",
                description: "This project required me to build a fully responsive multi page website to the designs provided. I used React and css along with gsap.js for a menu animation",
                img: "/images/portfolio/desktop/photosnap.png",
                type: "Interaction Design / Front-End Developent",
                used: "REACT, CSS, React-router-dom",
                link: "https://photosnap-r9wxa2kh3.vercel.app/"


            },
            {   project: "Movie/Show App",
                description: "This project required me to build a fully responsive app that allows you to fetch movies and shows from an api using the search box. This app uses firebase auth which allows a user to sign in/up with either email and password or Google login. The app also uses firebase cloud storage which allows the users to the movies/shows as favourites as long as they are signed in",
                img: "/images/portfolio/desktop/movie-app.png",
                type: "Interaction Design / Front-End Development",
                used: "HTML / CSS / JS(React, Redux) / Firebase(auth,cloud)",
                link:"https://react-movie-appppppp-ebp5gl8dv.vercel.app/"
            },
            {
                project: "Manage",
                description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
                img: "/images/portfolio/desktop/image-portfolio-manage.jpg",
                type: "Interaction Design / Front-End Development",
                used: "HTML / CSS / JS(Vanilla)",
                link: "https://manage-landing-page-by-henock-adane.vercel.app/"
            },
            {
                project: "Bookmark",
                description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
                img: "/images/portfolio/desktop/image-portfolio-bookmark.jpg",
                type: "Interaction Design / Front-End Development",
                used: "HTML / CSS / JS(Vanilla)",
                link: "https://book-mark-by-henock-adane.vercel.app/"
            },
            {
                project: "Insure",
                description: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
                img: "/images/portfolio/desktop/image-portfolio-insure.jpg",
                type: "Interaction Design / Front-End Development",
                used: "HTML / CSS / JS(Vanilla)",
                link: "https://insure-landing-page-by-henock.vercel.app/"
            },
            {
                project: "Fylo",
                description: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
                img: "/images/portfolio/desktop/image-portfolio-fylo.jpg",
                type: "Interaction Design / Front-End Development",
                used: "HTML / CSS / JS(Vanilla)",
                link:"https://flyo-landing-page-by-henock-adane.vercel.app/"
            }]
        }
    }


    componentDidMount(){
        gsap.from(".projectsBody", {opacity:0, duration: 2})
    }




    render(){

        const projectDIV = this.state.projectDetails.map((a, i)=>{
            if(i % 2 === 0){
              return <ProjectDiv1 h1={a.project} img={a.img} description={a.description} type={a.type} used={a.used} link={a.link} />
            }
      
            else{
                return <ProjectDiv2 h1={a.project} img={a.img} description={a.description} type={a.type} used={a.used} link={a.link} />
            }
      })
      
      
        return(<div className="projectsBody">
            {projectDIV}
            </div>

        )

    }
}

export default Projects