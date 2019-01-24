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
import Projects from "./Components/Projects";

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
          title="Background | Resume"
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
          subtitle={<Projects/>}
          dark={false}
          id="section4"
        />
        <Section
          title="Contact Me"
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
