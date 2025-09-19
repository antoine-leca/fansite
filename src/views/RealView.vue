<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center">Films avec Denzel Washington</h1>
    <ul class="list bg-base-100 rounded-box shadow-md max-w-3xl mx-auto">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Filmographie classée par date de sortie
      </li>

      <!-- Films à venir (date inconnue) -->
      <template v-if="moviesUnknown.length">
        <li class="divider text-center text-xs font-semibold opacity-60">
          À venir (date inconnue)
        </li>
        <li
          v-for="movie in moviesUnknown"
          :key="'unknown-' + movie.id"
          class="list-row items-center py-6"
        >
          <div class="w-24 text-center text-base font-mono italic opacity-60">Date inconnue</div>
          <div>
            <img
              v-if="movie.poster_path"
              class="w-24 h-36 rounded-box object-cover shadow"
              :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
              :alt="movie.title"
            />
            <div
              v-else
              class="w-24 h-36 rounded-box bg-base-200 flex items-center justify-center text-xs opacity-50"
            >
              N/A
            </div>
          </div>
          <div class="list-col-grow min-w-0 pl-4">
            <div class="truncate font-semibold text-lg md:text-2xl">{{ movie.title }}</div>
          </div>
          <button
            class="btn btn-square btn-ghost"
            :title="`Voir sur TMDB`"
            @click="openTmdb(movie.id)"
          >
            <svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 3L20 12 6 21 6 3z"></path>
              </g>
            </svg>
          </button>
        </li>
      </template>

      <!-- Divider entre les deux listes -->
      <template v-if="moviesUnknown.length && moviesDated.length">
        <li class="divider text-center text-xs font-semibold opacity-60">Films sortis</li>
      </template>

      <!-- Films avec date de sortie -->
      <li
        v-for="movie in moviesDated"
        :key="'dated-' + movie.id"
        class="list-row items-center py-6"
      >
        <div class="w-24 text-center text-base font-mono italic opacity-60">
          {{
            movie.release_date
              ? new Date(movie.release_date).toLocaleDateString('fr-FR')
              : 'Date inconnue'
          }}
        </div>
        <div>
          <img
            v-if="movie.poster_path"
            class="w-24 h-36 rounded-box object-cover shadow"
            :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
            :alt="movie.title"
          />
          <div
            v-else
            class="w-24 h-36 rounded-box bg-base-200 flex items-center justify-center text-xs opacity-50"
          >
            N/A
          </div>
        </div>
        <div class="list-col-grow min-w-0 pl-4">
          <div class="truncate font-semibold text-lg md:text-2xl">{{ movie.title }}</div>
        </div>
        <button
          class="btn btn-square btn-ghost"
          :title="`Voir sur TMDB`"
          @click="openTmdb(movie.id)"
        >
          <svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
    <p v-if="!moviesDated.length && !moviesUnknown.length" class="text-center mt-8">
      Chargement...
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        moviesDated: [],
        moviesUnknown: [],
      }
    },
    async mounted() {
      const apiKey = '6d89679d9cbbc46042844319a7effcff' // Remplacez par votre clé API TMDB
      const personId = 5292 // Denzel Washington
      const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=fr-FR`

      try {
        const response = await fetch(url)
        const data = await response.json()
        // Combine cast et crew, retire les doublons par id
        const allMovies = [...data.cast, ...data.crew]
        const uniqueMovies = Array.from(new Map(allMovies.map((m) => [m.id, m])).values())
        // Sépare les films avec et sans date de sortie
        const moviesUnknown = uniqueMovies.filter((m) => !m.release_date)
        const moviesDated = uniqueMovies
          .filter((m) => m.release_date)
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
        this.moviesUnknown = moviesUnknown
        this.moviesDated = moviesDated
      } catch (e) {
        console.error(e)
      }
    },
    methods: {
      openTmdb(id) {
        window.open(`https://www.themoviedb.org/movie/${id}`, '_blank')
      },
    },
  }
</script>
