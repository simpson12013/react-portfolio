import React from "react";

export default function MyLife() {
  return (
    <div>
       {/* <div class="parallax"><div id="stars1"></div><div id="stars2"></div><div id="stars3"></div></div> */}
    <div id="carouselMyLife" class="carousel slide" data-ride="carousel" data-interval="false">
  
  <ol class="carousel-indicators">
    <li data-target="#carouselMyLife" data-slide-to="0" class="active"></li>
    <li data-target="#carouselMyLife" data-slide-to="1"></li>
    <li data-target="#carouselMyLife" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-red">A Variety of Passions</h2>
            <p class="text-faded mb-4">Outside of working with data, I enjoy throwing myself head-first into my passions.
Whether I’m creating data visualizations, giving a cello recital, or broadcasting live on Twitch.tv as an online content-creator, I thrive on positivity and self-growth. There is nothing more thrilling for me than pushing my own limits and exceeding expectations.

<br></br>
I believe that a well-rounded background allows for new insights, greater adaptability, and more creative problem-solving. 

  
            </p>
            
          </div>
    </div>
    <div class="carousel-item">
        <div class="youtube"><iframe width="1120" height="630" src="https://www.youtube.com/embed/ZsfwAt03ifo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    <div class="carousel-item">
        <div class="youtube"><iframe width="1120" height="630" src="https://www.youtube.com/embed/DvCB3o69Iec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselMyLife" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselMyLife" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
        );
}
