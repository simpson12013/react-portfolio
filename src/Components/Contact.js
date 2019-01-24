import React from "react";

export default function Contact() {
  return (
    <div class="container">
        <div class="row-contact">
          <div class="col-lg-8 mx-auto text-center">
         
            <hr class="my-4"/>
            <p class="mb-5"></p>           
   
            <div class="row text-center">
              <div class="col-lg-4 ml-auto text-center">
                <i class="fab fa-linkedin fa-3x mb-3 sr-contact-2"></i>
                <p><a href="www.linkedin.com/in/simpson12013" target="_blank"> Linkedin</a></p>
              </div>
              <div class="col-lg-4 text-center">
                <i class="fab fa-github fa-3x mb-3 sr-contact-2"></i>
                <p><a href="https://github.com/simpson12013" target="_blank"> GitHub <br></br></a></p>
              </div>
              <div class="col-lg-4 mr-auto text-center">
                  <i class="fas fa-mail-bulk fa-3x mb-3 sr-contact-2"></i>
                  <p><span className="email">:liame moc.liamg@31021nospmis</span></p>
              </div>
            </div>

            <div class="row text-center">
                <div class="col-lg-4 ml-auto text-center">
                    <i class="far fa-file-pdf fa-3x mb-3 sr-contact-2"></i>
                    <p><a href="img/Blue and Red Header Theater Resume.pdf.pdf" target="_blank"> Resume <br></br></a></p>
                </div>
            </div>

          </div>
        </div>
      </div>
  );
}