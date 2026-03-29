const express = require('express')
const path = require('path')
const app = express()
const { default: Movie } = require('./models/movies.mjs')

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  movie1 = new Movie("Your Name.", new Date("2017-04-07"), "106 min", "Animation, Drama, Fantasy", "Makoto Shinkai", "Makoto Shinkai", "Ryûnosuke Kamiki, Mone Kamishiraishi, Ryo Narita", "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.", "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg", "81", "8.4")
  movie2 = new Movie("Project Hail Mary", new Date("2026-03-20"), "156 min", "Drama, Sci-Fi, Thriller", "Phil Lord, Christopher Miller", "Drew Goddard, Andy Weir", "Ryan Gosling, Milana Vayntrub, Ken Leung", "Science teacher Ryland Grace wakes up alone on a spaceship light-years from Earth. As his memory returns, he uncovers a mission to stop a mysterious substance killing the sun, and save Earth. An unexpected friendship may be the key.", "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_SX300.jpg", "N/A", "N/A")
  movie3 = new Movie("The Hangover", new Date("2009-06-05"), "100 min", "Comedy", "Todd Phillips", "Jon Lucas, Scott Moore", "Zach Galifianakis, Bradley Cooper, Justin Bartha", "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.", "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_SX300.jpg", "73", "7.7")
  res.json([movie1, movie2, movie3])
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

