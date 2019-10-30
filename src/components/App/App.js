import React from "react";
import Header from "../Header";
import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";
import inputData from "../../inputData.json";

export default function App() {
    return (
        <div className="App">
            <Header inputData={inputData} />
            <About inputData={inputData} />
            <Resume inputData={inputData} />
            <Contact inputData={inputData} />
            <Portfolio inputData={inputData} />
            <Footer inputData={inputData} />
        </div>
    );
}
