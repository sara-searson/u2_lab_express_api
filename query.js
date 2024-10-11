const db = require('./db')
const { Movie ,Actor, Review } = require('./models')

const deleteMovies = async () => {
    let deleted = await Actor.deleteMany({ name: 'Trevor Gagnon' })
    console.log(deleted)
  }

  async function main() {
    try {
        //await deleteMovies()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
  }
  
  main()