<script setup>

</script>

<template>
    <section class="hero lg:py-24">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/img/denzel.webp"
          class="max-w-sm rounded-lg h-96 lg:h-auto shadow-2xl select-none pointer-events-none"
          draggable="false"
        />
        <div>
          <h1 class="text-5xl title-font-dw">Denzel Washington</h1>
          <p class="py-6 pr-6 main-font-r tracking-wide text-lg text-justify">
            Denzel Washington, né le 28 décembre 1954 à Mount Vernon dans l'État de New York, est
            l’un des acteurs les plus respectés et influents du cinéma américain. Après des débuts
            remarqués au théâtre et à la télévision, il se fait connaître du grand public grâce à
            des rôles puissants et engagés, incarnant souvent des personnages complexes et
            charismatiques. Récompensé par deux Oscars, dont celui du meilleur acteur pour "Training
            Day", il a marqué l’histoire du septième art avec des performances inoubliables dans des
            films tels que "Malcolm X", "Glory", "Philadelphia", "Remember the Titans" ou encore la
            saga "Equalizer".
          </p>
          <div class="flex justify-center flex-wrap gap-4">
            <a href="/actu" class="btn btn-lg btn-neutral lg:hidden">Actualités</a>
            <a href="/real" class="btn btn-lg btn-neutral lg:hidden">Réalisations</a>
            <a href="/gallery" class="btn btn-lg btn-neutral lg:hidden">Galerie</a>
          </div>
        </div>
      </div>
    </section>
</template>
