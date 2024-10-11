const db = require('../db')
const { Movie, Actor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const barbieMovie = await Movie.findOne({ title: "Barbie" });
    const insideOut2Movie = await Movie.findOne({ title: "Inside Out 2" });
    const beetlejuiceMovie = await Movie.findOne({ title: "Beetlejuice" });
    const iSawTheTVGlowMovie = await Movie.findOne({ title: "I Saw the TV Glow" });
    const flyMeToTheMoonMovie = await Movie.findOne({ title: "Fly Me to the Moon" });
    const beetlejuice2Movie = await Movie.findOne({ title: "Beetlejuice Beetlejuice" });

    const actors = [
        { 
            name: "Margot Robbie", 
            age: 33, alive: true, 
            recent_movie: barbieMovie._id 
        },
        { 
            name: "Ryan Gosling", 
            age: 43, alive: true, 
            recent_movie: barbieMovie._id 
        },
        { 
            name: "Amy Poehler", 
            age: 52, 
            alive: true, 
            recent_movie: insideOut2Movie._id 
        },
        { 
            name: "Bill Hader", 
            age: 45, 
            alive: true, 
            recent_movie: insideOut2Movie._id 
        },

        { 
            name: "Michael Keaton", 
            age: 72, 
            alive: true, 
            recent_movie: beetlejuiceMovie._id 
        },
        { 
            name: "Winona Ryder", 
            age: 52, 
            alive: true, 
            recent_movie: beetlejuiceMovie._id 
        },

        { 
            name: "Justice Smith", 
            age: 28, 
            alive: true, 
            recent_movie: iSawTheTVGlowMovie._id 
        },
        { 
            name: "Brigette Lundy-Paine", 
            age: 30, 
            alive: true, 
            recent_movie: iSawTheTVGlowMovie._id 
        },

        { 
            name: "Channing Tatum", 
            age: 4, 
            alive: true, 
            recent_movie: flyMeToTheMoonMovie._id 
        },
        { 
            name: "Scarlett Johansson", 
            age: 39, 
            alive: true, 
            recent_movie: flyMeToTheMoonMovie._id 
        },
        { 
            name: "Jenna Ortega", 
            age: 21, 
            alive: true, 
            recent_movie: beetlejuice2Movie._id 
        },

    ];
    
    await Actor.insertMany(actors)
    console.log('Added actors with movies')
}

const run = async () => {
    await main()
    db.close()
}

run()