import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import AboutMe from "./Components/AboutMe";
import MainPage from "./Components/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Section
          title=""
          subtitle={<MainPage/>}
          dark={true}
          id="section1"
        />
        <Navbar />
        <Section
          title="About Me"
          subtitle={<AboutMe/>}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
