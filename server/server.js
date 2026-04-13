const express = require('express')
const path = require('path')
const app = express()
const { default: Movie } = require('./models/movies.mjs')

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code

  yourName ={"Title":"Your Name.","Year":"2016","Rated":"TV-PG","Released":"07 Apr 2017","Runtime":"106 min","Genre":"Animation, Drama, Fantasy","Director":"Makoto Shinkai","Writer":"Makoto Shinkai","Actors":"Ryûnosuke Kamiki, Mone Kamishiraishi, Ryo Narita","Plot":"Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.","Language":"Japanese","Country":"Japan","Awards":"17 wins & 27 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"81/100"}],"Metascore":"81","imdbRating":"8.4","imdbVotes":"385,171","imdbID":"tt5311514","Type":"movie","DVD":"N/A","BoxOffice":"$5,017,246","Production":"N/A","Website":"N/A","Response":"True"}
  ProjectHailMary = {"Title":"Project Hail Mary","Year":"2026","Rated":"PG-13","Released":"20 Mar 2026","Runtime":"156 min","Genre":"Drama, Sci-Fi, Thriller","Director":"Phil Lord, Christopher Miller","Writer":"Drew Goddard, Andy Weir","Actors":"Ryan Gosling, Milana Vayntrub, Ken Leung","Plot":"Science teacher Ryland Grace wakes up alone on a spaceship light-years from Earth. As his memory returns, he uncovers a mission to stop a mysterious substance killing the sun, and save Earth. An unexpected friendship may be the key.","Language":"English","Country":"United States","Awards":"1 nomination total","Poster":"https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt12042730","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
  TheHangover = {"Title":"The Hangover","Year":"2009","Rated":"R","Released":"05 Jun 2009","Runtime":"100 min","Genre":"Comedy","Director":"Todd Phillips","Writer":"Jon Lucas, Scott Moore","Actors":"Zach Galifianakis, Bradley Cooper, Justin Bartha","Plot":"Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.","Language":"English","Country":"Germany, United States","Awards":"Nominated for 1 BAFTA Award13 wins & 25 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"79%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.7","imdbVotes":"922,266","imdbID":"tt1119646","Type":"movie","DVD":"N/A","BoxOffice":"$277,339,746","Production":"N/A","Website":"N/A","Response":"True"}
  movie1 = Movie.fromJSON(yourName)
  movie2 = Movie.fromJSON(ProjectHailMary)
  movie3 = Movie.fromJSON(TheHangover)

  res.json([movie1, movie2, movie3])
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

