const db = require('../db')
const { Movie } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Populate data

const main = async () => {
    const movies = [
        {
          title: "Barbie",
          runtime_minutes: 114,
          rating: 'PG-13',
          family_friendly: true,  
          released: new Date("2023-07-21"),
          image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
        },
        {
          title: "Inside Out 2",
          runtime_minutes: 105,
          rating: 'PG',
          family_friendly: true,
          released: new Date("2024-06-14"),
          image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg"
        },
        {
          title: "Beetlejuice",
          runtime_minutes: 92,
          rating: 'PG-13',
          family_friendly: false,
          released: new Date("1988-03-30"),
          image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Beetlejuice_Beetlejuice_poster.jpg"
        },
        {
          title: "I Saw the TV Glow",
          runtime_minutes: 110,
          rating: 'PG-13',
          family_friendly: false,
          released: new Date("2024-05-17"),
          image: "https://upload.wikimedia.org/wikipedia/en/6/61/I_saw_the_tv_glow_film_poster.jpg"
        },
        {
          title: "Fly Me to the Moon",
          runtime_minutes: 134,
          family_friendly: false,
          rating: 'PG-13',
          released: new Date("2024-07-12"),
          image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Fly_Me_To_The_Moon_Movie_Poster.jpg"
        },
        {
            title: "Beetlejuice Beetlejuice", 
            runtime_minutes: 104, 
            rating: false,
            released: new Date("2024-09-06"),  
            image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Beetlejuice_Beetlejuice_poster.jpg"
          }
      ];

      await Movie.insertMany(movies)
      console.log('Movies made!')
}

const run = async () => {
    await main()
    db.close()
}

run()