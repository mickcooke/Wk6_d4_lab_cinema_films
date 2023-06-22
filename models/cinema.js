const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles =  function () {

    const result = this.films.map((film) => {return film.title});

    return result;
}


Cinema.prototype.getFilmByTitle =  function (title) {

  const result = this.films.filter((film) => {return film.title === title});

  return result[0];
}

Cinema.prototype.getFilmByGenre = function (genre) {

  const result = this.films.filter((film) => {return film.genre === genre });

  return result;

}

Cinema.prototype.totalRunningTime = function () {

  const total = this.films.reduce((runningTotal, film) => {return runningTotal + film.length}, 0);

  return total;
}

Cinema.prototype.confirmFilmFromYear = function (year) {

  const result = this.films.filter((film) => {return film.year === year });

  if (result.length >= 1) {return true}
  else {return false}; 

}

Cinema.prototype.confirmMinLength = function (length) {

  const result = this.films.filter((film) => {return film.length >= length});

  if (result.length === this.films.length) {return true}
  else {return false};
}







module.exports = Cinema;


