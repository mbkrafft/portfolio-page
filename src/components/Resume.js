import React from "react";

export default function Resume(props) {
    let inputData = props.inputData;

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {inputData.education &&
                        inputData.education.map(item => {
                            return (
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span>{" "}
                                            <em className="date">
                                                {item.MonthOfStarting}{" "}
                                                {item.YearOfStarting} -{" "}
                                                {item.MonthOfPassing}{" "}
                                                {item.YearOfPassing}
                                            </em>
                                        </p>
                                        <p className="desc">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {inputData.work &&
                        inputData.work.map(item => {
                            return (
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.CompanyName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span>{" "}
                                            <em className="date">
                                                {item.MonthOfStarting}{" "}
                                                {item.YearOfStarting} -{" "}
                                                {item.MonthOfLeaving}{" "}
                                                {item.YearOfLeaving}
                                            </em>
                                        </p>
                                        <p className="desc">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
