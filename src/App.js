import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import AboutMe from "./Components/AboutMe";
import MainPage from "./Components/MainPage";
import MyLife from "./Components/MyLife";
import Skills from "./Components/Skills";

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
          title="About"
          subtitle={<AboutMe/>}
          dark={false}
          id="section2"
        />
        <Section
          title="Skills"
          subtitle={<Skills/>}
          dark={false}
          id="section3"
        />
        <Section
          title="Projects"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Resume"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
        <Section
          title="My Life"
          subtitle={<MyLife/>}
          dark={false}
          id="section6"
        />
      </div>
    );
  }
}

export default App;
