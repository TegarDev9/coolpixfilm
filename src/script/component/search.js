class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light  bg-dark" >
        <div class="container-fluid">
          <a class="navbar-brand" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Coolpix Film</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-3 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">TV Show</a>
              </li>
              </br>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Film
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item " href="#nowPlaying">Now Playing</a></li>
                  <li><a class="dropdown-item" href="#popular">Popular</a></li>
                  <li><a class="dropdown-item"  href="#topRated">Top Rated</a></li>
                
                </ul>
              </li>
              </br>
              <li class="nav-item">
                <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">More</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
              <button class="btn btn-outline-primary" type="submit" id="Buttonsearch">Search</button>
            </form>
            </div>
          </div>
        </div>
      </nav>

    </div> 
        `;
  }
}

customElements.define('search-bar', SearchBar);
