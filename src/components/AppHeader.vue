<template>
  <header class="drawer drawer-end main-font-r text-(--cta-color)">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

    <!-- Contenu principal -->
    <div class="drawer-content flex flex-col w-full">
      <!-- Navbar -->
      <div class="navbar w-full">
        <!-- Logo -->
        <div class="h-full flex-1 justify-start lg:w-6/10 flex lg:justify-start items-center">
          <a class="mx-2 px-2 w-fit h-fit" href="/">
            <svg
              class="w-16 h-16 fill-[##1A1623]"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt"
              height="165.000000pt"
              viewBox="0 0 300.000000 165.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,165.000000) scale(0.050000,-0.050000)" stroke="none">
                <path
                  d="M5050 2940 c-14 -23 4 -32 93 -48 163 -29 162 -43 -111 -962 -276 -928 -254 -861 -271 -828 -8 15 -180 432 -383 925 -202 494 -380 903 -395 908 -50 20 -80 -49 -414 -950 -185 -498 -342 -905 -349 -905 -7 0 -70 187 -139 415 -304 1005 -471 1230 -1031 1386 -199 56 -1883 88 -1866 36 6 -16 56 -32 125 -40 217 -23 201 72 201 -1193 0 -1263 8 -1202 -165 -1233 -188 -33 -109 -61 177 -62 147 -1 462 -9 698 -18 582 -23 828 22 1141 208 173 103 366 307 347 368 -7 24 -56 155 -109 293 l-95 249 -13 -99 c-79 -608 -378 -860 -1021 -860 -546 0 -516 -71 -518 1217 -2 1149 -34 1033 281 1033 522 0 938 -216 1123 -583 35 -70 206 -514 379 -987 230 -626 325 -861 350 -866 55 -11 210 346 637 1471 80 212 152 378 159 370 7 -8 168 -393 359 -855 405 -982 411 -995 456 -986 26 4 124 272 405 1106 509 1511 470 1422 638 1444 48 7 79 21 75 34 -9 27 -747 39 -764 12z"
                />
              </g>
            </svg>
          </a>
        </div>

        <!-- Liens -->
        <div class="hidden lg:flex lg:justify-end">
          <ul class="flex items-center">
            <!-- Accueil -->
            <li>
              <a class="btn btn-ghost text-xl" href="/">Accueil</a>
            </li>

            <li>
              <a class="btn btn-ghost text-xl" href="/actu">Actualités</a>
            </li>

            <li>
              <a class="btn btn-ghost text-xl" href="/real">Réalisations</a>
            </li>

            <li>
              <a class="btn btn-ghost text-xl" href="/gallery">Galerie</a>
            </li>
          </ul>
        </div>

        <!-- Menu burger mobile -->
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current text-(--cta-color)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side z-30">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-white min-h-full w-80 p-4 pt-[64px]">
        <li><a class="pl-8 text-lg" href="/actu">Accueil</a></li>

        <li><a class="pl-8 text-lg" href="/actu">Actualités</a></li>

        <li><a class="pl-8 text-lg" href="/real">Réalisations</a></li>
        
        <li><a class="pl-8 text-lg" href="/gallery">Galerie</a></li>
      </ul>
    </div>
  </header>
  <div class="ml-7 breadcrumbs text-lg">
    <ul>
      <li>
        <router-link to="/" :class="$route.path === '/' ? 'main-font-m' : 'main-font-r text-gray-500'">
          Accueil
        </router-link>
      </li>
      <li v-if="$route.path.startsWith('/actu')">
        <router-link
          to="/actu"
          v-if="$route.path.startsWith('/actu')"
          :class="$route.path.startsWith('/actu') ? 'main-font-m' : 'main-font-r text-gray-500'"
        >
          Actualités
        </router-link>
      </li>
      <li v-if="$route.path.startsWith('/real')">
        <router-link
          to="/real"
          v-if="$route.path.startsWith('/real')"
          :class="$route.path.startsWith('/real') ? 'main-font-m' : 'main-font-r text-gray-500'"
        >
          Réalisations
        </router-link>
      </li>
      <li v-if="$route.path.startsWith('/gallery')">
        <router-link
          to="/real"
          v-if="$route.path.startsWith('/gallery')"
          :class="$route.path.startsWith('/gallery') ? 'main-font-m' : 'main-font-r text-gray-500'"
        >
          Galerie
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>
