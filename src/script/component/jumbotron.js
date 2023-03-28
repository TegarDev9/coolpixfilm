class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="p-4 mb-4 text-center " style="fontFamily: 'Open Sans'; background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(137,156,159,1) 0%, rgba(1,0,0,1) 35%, rgba(137,156,159,1) 100%);"> 
        <h2 class="mb-3 bg-black" style="color:white;background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(137,156,159,1) 0%, rgba(1,0,0,1) 35%, rgba(137,156,159,1) 100%);">Best movie viewing site in the world</h2>
        <h6 class="mb-3 bg-black" style="color:white; fontFamily: 'Open Sans'; background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(137,156,159,1) 0%, rgba(1,0,0,1) 35%, rgba(137,156,159,1) 100%);">
        Find the thrill, enjoy the experience and feel the satisfaction of watching the best movie at Coolpix Film. Don't miss the fun of watching the best selection of movies that will entertain your day and create unforgettable memories with us. Choose the best movies and enjoy the luxury of watching at Coolpix Film, where you can find a new world of watching movies that you can only find here. Be an audience who has a cooler style of watching movies with Coolpix Film and enjoy watching the best movies with maximum picture and sound quality.</h6>
        <a class="btn btn-primary" href="" role="button">subscription Now</a>
      </div>
        `;
  }
}

customElements.define('jumbo-bar', Jumbotron);
