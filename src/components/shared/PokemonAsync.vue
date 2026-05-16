<!-- Component to show a randon pokemon and its data ever 10 seconds -->
<template>
    <div class="pokemon-card">

        <!-- The front sprite of the pokemon -->
        <div class="sprite-container">
            <img :src="pokeSprite" alt="">
        </div>

        <!-- The pokemons name and pokedex number -->
        <div class="pokemon-info">
            <div class="top-row">
                <span class="name">{{ pokeName }}</span>
                <span class="poke-id">#{{ pokeId }}</span>
            </div>

            <!-- They pokemons types -->
            <div class="bottom-row">
                <span>{{ pokeType1 }}</span>
                <!-- Only shows if there is something to show -->
                <span>{{ pokeType2 }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
// Import
import { ref } from 'vue'

// Initialize globally scoped vvariables so the state of the pokemon object can be maintained once the functions runs
let pokeSprite = ref("");
let pokeName = ref("");
let pokeId = ref("");
let pokeType1 = ref("");
let pokeType2 = ref("");

// A funtion to call the pokeApi website and pull the needed data out to display
async function callPokemonApi() {
    // Generates a random number
    let randomPokemonId = Math.floor(Math.random() * 1028) + 1;

    // Calls the api
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);

    // Takes the data from the api call and turns it into a JSON object 
    let pokeJson = await apiCall.json();

    // Gets the front sprite image
    pokeSprite.value = pokeJson.sprites.front_default;

    // Gets the species name
    pokeName.value = pokeJson.species.name;

    // Gets the PokeDex id
    pokeId.value = pokeJson.id;

    // Gets the 1st type
    pokeType1.value = pokeJson.types[0].type.name;

    // Optional second type
    pokeType2.value = pokeJson.types[1] ? pokeJson.types[1].type.name : "";
}


// Runs immediately when the page first loads
callPokemonApi();

// Runs every 10 seconds
setInterval(callPokemonApi, 10000);
</script>