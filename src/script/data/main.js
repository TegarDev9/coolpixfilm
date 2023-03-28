import $ from 'jquery';
const Image = 'https://image.tmdb.org/t/p/w500/';
const Api_key = 'd00356b7ecac2f0c48ebf24db6c63ec3';

const coolpixfilms = () => {
    const coolpixfilmTopRated = () => {
        $('.top-rate').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/top_rated?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': Api_key,
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.top-rate').append(`
                    <div class="col-md-2">
                                <div class="card mb-2">
                                    <img src="${Image + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem; color:white;">
                                        <h4 class="card-title" style="color:white;">${data.title}</h4>
                                        <p class="card-text" style="color:white;">${data.release_date}</p>
                                         <button type="button" class="btn btn-primary" data-toggle="" data-target="" data-id="">
                                        Tonton
                                            </button>
                                        </div>
                                        </div>
                             </div>`);
                });
            }
        });
      
    };

    coolpixfilmTopRated();

    const coolpixfilmPopular = () => {
        $('.popular').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/popular?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': Api_key,
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.popular').append(`
                        <div class="col-md-2">
                                <div class="card mb-2">
                                    <img src="${Image + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h4 class="card-title" style="color:white;">${data.title}</h4>
                                        <p class="card-text" style="color:white;">${data.release_date}</p>
                                        <button type="button" class="btn btn-primary" data-toggle="" data-target="" data-id="">
                                        Tonton
                                        </button>
                                    </div>
                                </div>
                            </div>`)
                });
            }
        });
     
    };

     coolpixfilmPopular();

    const searchcoolpixfilm = () => {
        $('.coolpixfilm').html('');
        $('.merge').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': Api_key,
                'query': $('#search').val()
            },
            success: (data) => {
                if (data.results.length === 0) {
                    $('.error').html(
                        ` <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                        <div>
                        unable to find movie title
                        </div>
                      </div>`
                    )

                } else {
                    data.results.forEach(data => {
                        $('.search-title').html(`<h3 class="text-center mb-2 mt-2" style="color:white;">Search: ${$('#search').val()}</h3><hr>`);
                        $('.coolpixfilm').append(`
                        <div class="col-md-2">
                                <div class="card mb-2">
                                    <img src="${Image + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h4 class="card-title"style="color:white;">${data.title}</h4>
                                        <p class="card-text"style="color:white;">${data.release_date}</p>
                                        <button type="button" class="btn btn-primary " data-toggle="" data-target="" data-id="${data.id}">
                                        Tonton
                                        </button>
                                    </div>
                                </div>
                            </div>`)
                    });
                    $('#search').val();
                }
            }
        });
      
    };

    $('#Buttonsearch').on('click', () => {
        searchcoolpixfilm();
    });


    $('#search').on('keyup', (event) => {
        if (event.keyCode === 13) {
            searchcoolpixfilm();
        }
    });


    $('.nav').on('click', () => {
        $('.nav').removeClass('fclick');
        $(event.target).addClass('fclick');
    });

    $('.Nav-location').on('click', () => {
        location.reload();
    })

    const coolpixfilmNowPlaying = () => {
        $('.now-playing').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/now_playing?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': Api_key,
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.now-playing').append(`
                    <div class="col-md-2">
                            <div class="card mb-2">
                                <img src="${Image + data.poster_path}" class="card-img-top" alt="${data.title}">
                                <div class="card-body style="width: 18rem;">
                                    <h4 class="card-title" style="color:white;">${data.title}</h4>
                                    <p class="card-text" style="color:white;">${data.release_date}</p>
                                    <button type="button" class="btn btn-primary" data-toggle="" data-target="" data-id="">
                                    Tonton
                                    </button>
                                </div>
                            </div>
                        </div>`)
                });
            }
        });
      
    };

    coolpixfilmNowPlaying();
      
};

export default coolpixfilms;