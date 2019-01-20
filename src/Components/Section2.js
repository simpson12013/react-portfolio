import React from "react";

export default function Section2() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-red">Short Background</h2>
            <p class="text-faded mb-4">I come from a background in healthcare. As an undergraduate, 
              I was on the pre-med track, but after shadowing doctors I decided to change trajectories
               to a career path that suited my personality and skillset. This has lead me to pursue a 
               career in data science. I am looking to break into the industry after graduating from KU’s 
               data analytics program by leveraging my strong foundation in analytics and statistics garnered
                from my BS in Biochemistry. I have discovered a new challenge and passion in programing.
                 I love to unravel difficult problems, and pursue unique solutions. I am excited for new
                  opportunities and challenges, and look forward to impacting health outcomes via data driven measures.   
            </p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="#skills">View Skills</a>
          </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
        );
}
