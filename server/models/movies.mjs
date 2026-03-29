export default class Movie {
  constructor(title, released, runtime, genres, directors, writers, actors, plot, poster, metascore, imdbRating) {
    this.title = title;
    this.released = released.toISOString();
    this.runtime = parseInt(runtime);
    this.genres = genres.split(',');
    this.directors = directors.split(',');
    this.writers = writers.split(',');
    this.actors = actors.split(',');
    this.plot = plot;
    this.poster = poster;
    this.metascore = parseFloat(metascore);
    this.imdbRating = parseFloat(imdbRating);
  }
}