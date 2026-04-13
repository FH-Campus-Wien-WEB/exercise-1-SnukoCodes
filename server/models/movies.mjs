export default class Movie {
  constructor(title, released, runtime, genres, directors, writers, actors, plot, poster, metascore, imdbRating) {
    this.title = title ?? "Title not available";
    this.released = released ? released.toISOString() : "".toISOString();
    this.runtime = runtime ? parseInt(runtime) : "Runtime not available";
    this.genres = genres ? genres.split(',') : "Genres not available";
    this.directors = directors ? directors.split(',') : "Directors not available";
    this.writers = writers ? writers.split(',') : "Writers not available";
    this.actors = actors ? actors.split(',') : "Actors not available";
    this.plot = plot ?? "Plot not available";
    this.poster = poster ?? "Poster not available";
    this.metascore = metascore ? parseFloat(metascore) : "Metascore not available";
    this.imdbRating = imdbRating ? parseFloat(imdbRating) : "IMDb Rating not available";
  }

  static fromJSON(json) {
    return new Movie(
      json.Title,
      new Date(json.Released),
      json.Runtime,
      json.Genre,
      json.Director,
      json.Writer,
      json.Actors,
      json.Plot,
      json.Poster,
      json.Metascore,
      json.imdbRating
    );
  }
}