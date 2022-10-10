import React from "react";
// import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

const data = [
    {
        img: "/images/projects/01_herring.jpg",

        header: "Read Herring",
        caption: `The result of a week long team project and our final project of the Futureproof course, this site features a forum, a search page for finding books by title using the google books api, a user login and a user profile page where books can added to favourites and displayed on bookshelf.\n`,
        link: "https://read-herring.netlify.app/",
        githubLink: "#",
    },
    {
        img: "/images/projects/02_lemon.jpg",
        header: "Lemon Party",
        caption: `The first team project I undertook on the futureproof course, this site is a basic forum that features reactions and gifs using vanilla javascript. Information is stored in the backend in json format.\n`,
        link: "https://journal-project-lemon.netlify.app/",
        githubLink: "#",
    },
    {
        img: "/images/projects/03_potato.jpg",
        header: "Potato or Pepsi?",
        caption: `Created after learning how to send data from the front-end to back-end using the fetch() API.\n\n
            This simple app generates an image of either a can of pepsi or a potato at random, trigged by an onClick event.\n\n
            It proved to be quite popular!`,
        link: "https://potato-or-pepsi.netlify.app",
        githubLink: "#",
    },
];

export const Projects = () => {
    return (
        <div className="container projects-wrapper p-3 mb-3 rounded-3">
            <h2>Projects</h2>
            <hr width="100%"></hr>
            <div className="projects-carousel-wrapper">
                <div className="projects-carousel-inner">
                    <Carousel className="projects-carousel">
                        {data.map((data) => (
                            <Carousel.Item
                                className="carousel-item"
                            >
                                <img
                                    className="rounded-3 project-image d-block w-100"
                                    src={data.img}
                                    alt={data.header}
                                />
                                <Carousel.Caption className="rounded-3">
                                    <h3>{data.header}</h3>
                                    <p>{data.caption}</p>
                                    <p>
                                        <a href={data.link}>{data.link}</a>
                                    </p>
                                    <p>
                                        <a href={data.githubLink}>{data.githubLink}</a>
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
