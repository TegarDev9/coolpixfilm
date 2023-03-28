class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="text-center text-lg-start bg-light text-muted">
   
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">
     
        <div class="row mt-3">
        
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
            <h6 class="text-uppercase fw-bold mb-4" style="color:white">
              <i class="fas fa-gem me-3"></i>Coolpix film
            </h6>
            <p>
            
            </p>
          </div>
       
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style="color:white">
          
            <h6 class="text-uppercase fw-bold mb-4">
              TV SHOWS
            </h6>
            <p>
              <a href="#!" class="text-reset">  Realitty shows</a>
            </p>
            <p>
              <a href="#!" class="text-reset">documenter</a>
            </p>
            <p>
              <a href="#!" class="text-reset">variety show</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Magazine shows</a>
            </p>
          </div>
       
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style="color:white">
           
            <h6 class="text-uppercase fw-bold mb-4">
              Films
            </h6>
            <p>
              <a href="#!" class="text-reset">Thriller</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Horor</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Aksi</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Animasi</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style="color:white">
          
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Indonesia, Jawa Timur,Jember</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
                   tegarilham4444@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 62857369348934</p>
            <p><i class="fas fa-print me-3"></i> + 62085735639640</p>
          </div>
        
        </div>
     
      </div>
    </section>
  
    <div class="text-center p-4 bg-secondary" style="color:white; background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(1,0,0,1) 35%, rgba(137,156,159,1) 100%); ">
      © 2023 Copyright:Tegar karunia ilham
    </div>

  </footer>    
    
        `;
  }
}

customElements.define('footer-bar', Footer);
