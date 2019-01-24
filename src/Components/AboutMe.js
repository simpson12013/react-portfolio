import React from "react";

export default function AboutMe() {
  return (
    <div>
       {/* <div class="parallax"><div id="stars1"></div><div id="stars2"></div><div id="stars3"></div></div> */}
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-red">Background</h2>
            <p class="text-faded mb-4">I obtained my Bachelor's Degree in 2018, with majors in Cello Performance and Music Theory. Balancing these two areas of study instilled in me the importance of time management, work ethic, and passion. Throughout my college career, I loved working within and modeling the abstract logic systems found in Music Theory. As I came to the decision to diverge from music as a career path, I searched for another outlet to complement my skills in creative problem-solving and analysis. This has led me to pursue a career in data science. Having graduated from KU’s data analytics program, I am excited to apply my newly-discovered passion for programming to the opportunities that lie ahead.

  
            </p>
            
          </div>
    </div>
    <div class="carousel-item">
    <img class="resume center-block" src="img/Resume-Thumbnail.png" alt="Card image cap"/>
    <div class= "resume-button">
      <a href="img/Blue and Red Header Theater Resume.pdf" target="_blank" class="btn btn-primary">Full Resume</a>
    </div>
    </div>

    <div class="carousel-item">
    <div class="col-lg-8 mx-auto text-center">
        <div class="Connect">
					<h3>Contact Info</h3>
          <hr class="my-4"/>				
						<p> Phone: (913) 515-2573 </p>
            <p><span className="email">moc.liamg@31021nospmis :liame</span></p>
            <div class="d-inline-flex p-2 text-center">
              <div class="service-box mt-5 mx-auto">
                <a href= "https://www.github.com/simpson12013" target="_blank">
                  <img className="pic80" id="hjc" src="img/github.png"/>
                </a>
                <h5 class="mb-3">Github</h5>
              </div>
            </div>
            <div class="d-inline-flex p-2 text-center">
              <div class="service-box mt-5 mx-auto">
                <a href= "www.linkedin.com/in/simpson12013" target="_blank">
                  <img className="pic80" id="hjc" src="img/linkedin.png"/>
                </a>
                <h5 class="mb-3">Linkedin</h5>
              </div>
            </div>
				</div>
        
        </div>
    </div>
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
