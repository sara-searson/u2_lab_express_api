const db = require('../db')
const { Movie, Review } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const barbieMovie = await Movie.findOne({ title: "Barbie" });
    const insideOut2Movie = await Movie.findOne({ title: "Inside Out 2" });
    const beetlejuiceMovie = await Movie.findOne({ title: "Beetlejuice" });
    const iSawTheTVGlowMovie = await Movie.findOne({ title: "I Saw the TV Glow" });
    const flyMeToTheMoonMovie = await Movie.findOne({ title: "Fly Me to the Moon" });
    const beetlejuice2Movie = await Movie.findOne({ title: "Beetlejuice Beetlejuice" });

    const reviews = [
        {
            name: "John Doe",
            movie: barbieMovie._id,
            review: "Barbie is a delightful and visually stunning film with a clever storyline. The performances are fantastic, and the humor keeps it engaging from start to finish.",
            score: 5
          },
          {
            name: "Jane Smith",
            movie: insideOut2Movie._id,
            review: "Inside Out 2 lives up to its predecessor with a heartwarming narrative and emotional depth. It's a must-watch for both kids and adults.",
            score: 4
          },
          {
            name: "Chris Johnson",
            movie: beetlejuice2Movie._id,
            review: "Beetlejuice 2 brings back the eccentric charm of the original, with Michael Keaton delivering another unforgettable performance. It's spooky, funny, and highly entertaining.",
            score: 4
          },
          {
            name: "Alex Lee",
            movie: iSawTheTVGlowMovie._id,
            review: "I Saw the TV Glow is an eerie and unsettling film that blurs the lines between reality and fiction. It's a haunting experience but may not be for everyone.",
            score: 3
          },
          {
            name: "Sarah Thompson",
            movie: barbieMovie._id,
            review: "Barbie is a colorful, whimsical adventure that cleverly explores themes of identity and empowerment. Margot Robbie shines in the lead role, and the set design is a visual feast!",
            score: 4
          },
          {
            name: "Tom Richardson",
            movie: beetlejuice2Movie._id,
            review: "Beetlejuice 2 is a fantastic return to form! The quirky humor and gothic aesthetic are back in full force. Fans of the original will love the new take while staying true to its roots.",
            score: 5
          },
          {
            name: "Megan Roberts",
            movie: iSawTheTVGlowMovie._id,
            review: "I Saw the TV Glow is a strange and haunting film that will leave you questioning reality. It's a unique psychological thriller, it felt like a blast back in time. They don't make them like this anymore.",
            score: 4
          }
    ]

    await Review.insertMany(reviews)
    console.log('Added reviews with movies')
}

const run = async () => {
    await main()
    db.close()
}

run()