import React from "react";

export default function Projects() {
  return (
    <div>
    <nav>
  <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
    <a class="nav-item-projects nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Sarah's Angels</a>
    <a class="nav-item-projects nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">D3</a>
    <a class="nav-item-projects nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Breed Analyzer</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <img class="center-block project-pic" src="img/SarahsAngels.png" alt="Card image cap"/>
    <div class="project-description">Project Description: The purpose of this site is to provide an all-in-one resource for pet adoption. Interactive JavaScript mapping, regional search functionality, and a live Tableau Dashboard provide potential adopters with all the tools that they need in order to connect with the pet that is right for them.
    <br></br>Technologies/Frameworks Used: JavaScript, Leaflet Mapping, MySQL
    </div>
    <a href="/react-portfolio/Projects/simpson12013.github.io/index.html" target="_blank" class="btn btn-primary project-button">Project</a>
  </div>
  
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <img class="center-block project-pic" src="img/d3-scatter.png" alt="Card image cap"/>
    <div class="project-description">Project Description: An interactive scatterplot that utilizes Javascript and D3.js to bring viewers specific information at the click of a button. Six datasets can be swapped out and compared, and data points present tooltips when hovered over with the cursor.
    <br></br>Technologies/Frameworks Used: JavaScript, D3.js, HTML/CSS</div>
    <a href="/react-portfolio/Projects/D3/index.html" target="_blank" class="btn btn-primary project-button">Project</a>
  </div>
  
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <img class="center-block project-pic" src="img/breed.jpeg" alt="Card image cap"/>
    <div class="project-description">Project Description: As a supplement to the Sarah’s Angels site, this machine learning ensemble uses three distinct categorization models to determine an animal’s breed. A trained ML model determines whether a given photo contains a dog or a cat, and then passes the photo to one of two pre-trained breed-analyzing models based on the determined species.
    <br></br>Technologies/Frameworks Used: Python, Tensorflow, Keras, Scikit-Learn</div>
    <a href="https://github.com/simpson12013/simpson12013.github.io/tree/master/Breed%20Detector" target="_blank" class="btn btn-primary project-button">Git Repo</a>
  </div>
</div>
</div>
  );
}