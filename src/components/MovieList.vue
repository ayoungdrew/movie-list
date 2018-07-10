<template>
<div style="width: 70vw; min-width: 700px; margin: auto;">
  <h1 style="text-align: center;">Favorite Movie List</h1>
  <div style="text-align: center;">
  <select v-model="selected">
    <option disabled value="">Filter with a label</option>
    <option>action</option>
    <option>anime</option>
    <option>comedy</option>
    <option>drama</option>
    <option>sci-fi</option>
    <option>all</option>
  </select>
  </div>
  <div id="movie-list">
    <movie-listing v-for="(cheese, i) in filteredByGenre" class="movie-listing" :title="cheese.title" :year="cheese.year" :genre="cheese.genre"></movie-listing>
    <h3 v-if="emptyGenre">No movies of this genre</h3>
  </div>
  <div id="movie-form">
  <form @submit.prevent="addMovie">
    <p>
      <span>New Movie Title</span>
      <input v-model="newTitle" placeholder="Enter new movie title"/>
    </p>
    <p>
      <span>New Movie Year</span>
      <input v-model="newYear" placeholder="Enter new movie year"/>
    </p>
    <p>
      <span>New Movie Genre</span>
      <input v-model="newGenre" placeholder="Enter new movie genre"/>
    </p>
    <button type="submit">Add New Movie</button>
  </form>
    </div>
</div>
</template>

<script>
import MovieListing from '@/components/MovieListing'

export default {
  name: 'MovieList',
  data () {
    return {
      newTitle: '',
      newYear: '',
      newGenre: '',
      selected: '',
      emptyGenre: '',
      movies: [
        {
          title: 'The Bourne Identity',
          year: '2002',
          genre: 'action'
        },
        {
          title: 'Forest Gump',
          year: '1994',
          genre: 'drama'
        },
        {
          title: 'Ladybird',
          year: '2017',
          genre: 'drama'
        },
        {
          title: 'Godzilla vs. Mothra',
          year: '1992',
          genre: 'sci-fi'
        },
        {
          title: 'Inception',
          year: '2011',
          genre: 'sci-fi'
        },
        {
          title: 'Pacific Rim',
          year: '2013',
          genre: 'sci-fi'
        },
        {
          title: 'Scott Pilgrim vs. the World',
          year: '2010',
          genre: 'comedy'
        },
        {
          title: 'Sicario',
          year: '2015',
          genre: 'action'
        }
      ]
    }
  },
  components: {
    MovieListing
  },
  methods: {
    addMovie () {
      let newMovie = {
        title: this.newTitle,
        year: this.newYear,
        genre: this.newGenre
      }
      this.movies.push(newMovie)
    }
  },
  computed: {
    filteredByGenre () {
      let filter = new RegExp(this.selected.toLowerCase())
      if (this.selected === 'all') {
        this.emptyGenre = false
        return this.movies
      } else if (this.movies.filter((x) => x.genre.toLowerCase().match(filter)).length < 1) {
        this.emptyGenre = true
      } else {
        this.emptyGenre = false
        return this.movies.filter((x) => x.genre.toLowerCase().match(filter))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#movie-form {
  float: right;
  border: 1px solid gray;
  padding: 30px 30px 40px 30px;
}
#movie-list {
  min-width: 200px;
  margin-right: 50px;
  float: left;
}
.movie-listing {
  margin: 10px 10px 24px 10px;
}
</style>
