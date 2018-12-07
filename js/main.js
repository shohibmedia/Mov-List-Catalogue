window.fn = {};

window.fn.open = function() {
	var menu = document.getElementById('menu');
	menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
  .then(menu.close.bind(menu));
  if(page == 'nowPlaying.html'){
    nowPlaying();
  }else if(page == 'upcoming.html'){
    upcoming();
  }
};

function cari(){
  var judulFilm = document.getElementById('input').value;
  var url = `https://api.themoviedb.org/3/search/movie?api_key=ce70a13bd3c6a290cc46fb58c0c5cdcb&query=${judulFilm}`;
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'JSONP',
    success: function (res) {
      var print = "";
      var movie = res.results;
      for (var i = 0; i < movie.length; i++) {
        print += `
          <ul class="list" style="padding: 10px; margin-top: 20px;">
            <li class="list-item">
              <div class="list-item__left">
                <img src="https://image.tmdb.org/t/p/w500/${movie[i].poster_path}" style="width: 100%; height: 150px" alt="${movie[i].title}">
              </div>
              <div class="list-item__center">
                <div class="list-item__subtitle"><b>${movie[i].title}</b></div>
                <div class="list-item__subtitle">${movie[i].overview.substring(0, 40)} ...</div>
                <div class="list-item__subtitle"><b>Release Date :</b> ${movie[i].release_date}</div>
                <div class="list-item__subtitle"><b>Vote Count :</b> ${movie[i].vote_count}</div>
              </div>
            </li>
          </ul>
        `;
      }
      document.getElementById('isiPencarianFilm').innerHTML = print;
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function nowPlaying() {
  var nowPlayUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=ce70a13bd3c6a290cc46fb58c0c5cdcb&language=en-US`;
  $.ajax({
    url: nowPlayUrl,
    method: 'GET',
    dataType: 'JSONP',
    success: function (res) {
      var print = "";
      var movie = res.results;
      for (var i = 0; i < movie.length; i++) {
        print += `
          <ul class="list" style="padding: 10px; margin-top: 20px;">
            <li class="list-item">
              <div class="list-item__left">
                <img src="https://image.tmdb.org/t/p/w500/${movie[i].poster_path}" style="width: 100%; height: 150px" alt="${movie[i].title}">
              </div>
              <div class="list-item__center">
                <div class="list-item__subtitle"><b>${movie[i].title}</b></div>
                <div class="list-item__subtitle">${movie[i].overview.substring(0, 40)} ...</div>
                <div class="list-item__subtitle"><b>Release Date :</b> ${movie[i].release_date}</div>
                <div class="list-item__subtitle"><b>Vote Count :</b> ${movie[i].vote_count}</div>
                <div class="list-item__subtitle"><b>Popularity :</b> ${movie[i].popularity}</div>
              </div>
            </li>
          </ul>
        `;
      }
      document.getElementById('isiNowPlaying').innerHTML = print;
    },
    error: function (err) {
      console.log(err);
    }
  });
}
 
function upcoming() {
  var nowPlayUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=ce70a13bd3c6a290cc46fb58c0c5cdcb&language=en-US`;
  $.ajax({
    url: nowPlayUrl,
    method: 'GET',
    dataType: 'JSONP',
    success: function (res) {
      var print = "";
      var movie = res.results;
      for (var i = 0; i < movie.length; i++) {
          print += `
            <ul class="list" style="padding: 10px; margin-top: 20px;">
              <li class="list-item">
                <div class="list-item__left">
                  <img src="https://image.tmdb.org/t/p/w500/${movie[i].poster_path}" style="width: 100%; height: 150px" alt="${movie[i].title}">
                </div>
                <div class="list-item__center">
                  <div class="list-item__subtitle"><b>${movie[i].title}</b></div>
                  <div class="list-item__subtitle">${movie[i].overview.substring(0, 40)} ...</div>
                  <div class="list-item__subtitle"><b>Release Date :</b> ${movie[i].release_date}</div>
                  <div class="list-item__subtitle"><b>Vote Count :</b> ${movie[i].vote_count}</div>
                  <div class="list-item__subtitle"><b>Popularity :</b> ${movie[i].popularity}</div>
                </div>
              </li>
            </ul>
          `;
      }
      document.getElementById('isiUpcoming').innerHTML = print;
    },
    error: function (err) {
      console.log(err);
    }
  });
}
