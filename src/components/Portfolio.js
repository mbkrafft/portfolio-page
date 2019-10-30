import React from "react";

export default function Portfolio(props) {
    let inputData = props.inputData;

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Projects</h1>
                    <div
                        id="portfolio-wrapper"
                        className="bgrid-quarters s-bgrid-thirds cf"
                    >
                        {inputData.portfolio &&
                            inputData.portfolio.map(item => {
                                return (
                                    <div className="columns portfolio-item">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="item-wrap">
                                                <img
                                                    src={`${item.imgurl}`}
                                                    className="item-img"
                                                    alt={item.description}
                                                />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}
