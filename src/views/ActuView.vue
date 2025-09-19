<template>
  <div class="flex flex-col items-center min-h-screen bg-base-200 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">Dernières actualités de Denzel Washington</h1>
    <div v-if="news.length" class="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
      <div v-for="article in news" :key="article.url" class="card bg-base-100 w-96 shadow-sm">
        <figure v-if="article.image">
          <img :src="article.image" :alt="article.title" class="h-56 w-full object-cover" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <small>
            {{ new Date(article.publishedAt).toLocaleDateString() }}
            <span v-if="article.source?.name"> - {{ article.source.name }}</span>
          </small>
          <div class="card-actions justify-end">
            <a :href="article.url" target="_blank" rel="noopener" class="btn btn-neutral">
              Lire l'article
            </a>
          </div>
        </div>
      </div>
    </div>
    <span class="loading loading-xl loading-spinner text-neutral mt-16" v-else></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    }
  },
  mounted() {
    this.fetchNews()
  },
  methods: {
    async fetchNews() {
      const apiKey = import.meta.env.VITE_GNEWS_KEY
      const url = `https://gnews.io/api/v4/search?q=Denzel%20Washington&lang=fr&max=10&apikey=${apiKey}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        this.news = data.articles || []
      } catch (error) {
        console.error('Erreur lors de la récupération des actualités :', error)
      }
    },
  },
}
</script>
