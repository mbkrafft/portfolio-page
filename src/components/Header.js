import React from "react";

export default function Header(props) {
    let inputData = props.inputData;

    return (
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#-" title="Hide navigation">
                        Hide navigation
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Education
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            {inputData.name}
                        </h1>
                        <h3>
                            {inputData.role}. {inputData.roleDescription}
                        </h3>
                        <hr />
                        <ul className="social">
                            {inputData.socialLinks &&
                                inputData.socialLinks.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i
                                                    className={item.className}
                                                ></i>
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        </React.Fragment>
    );
}
