import React from "react";

export default function About(props) {
    let inputData = props.inputData;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src="images/profilepic.png"
                        alt=""
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{inputData.aboutme}</p>
                </div>
            </div>
        </section>
    );
}
