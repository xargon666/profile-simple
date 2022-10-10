import React from "react";
import "./style.css";

export const About = () => {
    return (
        <div className="container about-wrapper">
            <div className="profile-pic-wrapper rounded">
                <img
                    className="img-fluid"
                    src="/images/about/profile1.jpg"
                    alt="headshot"
                ></img>
            </div>
            <div className="profile-text-wrapper">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec bibendum vel erat in rhoncus. Donec aliquet lorem ac
                    sem pretium, eget convallis dolor condimentum. Duis eget
                    pretium turpis, a porta tellus. Praesent ac pretium mauris.
                    Sed magna massa, convallis vel orci quis, ornare consectetur
                    mauris. Cras sodales in ipsum in tincidunt. Nunc iaculis
                    nisl ut fermentum imperdiet. Nam sit amet ipsum erat. Donec
                    tincidunt vestibulum ante, volutpat rhoncus nulla luctus
                    sed.
                </span>
            </div>
        </div>
    );
};
