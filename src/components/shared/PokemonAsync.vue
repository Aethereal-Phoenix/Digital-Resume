<template>
    <div class="pokemon-card">

        <div class="sprite-container">
            <img :src="pokeSprite" alt="">
        </div>

        <div class="pokemon-info">
            <div class="top-row">
                <span class="name">{{ pokeName }}</span>
                <span class="poke-id">#{{ pokeId }}</span>
            </div>

            <div class="bottom-row">
                <span>{{ pokeType1 }}</span>
                <span>{{ pokeType2 }}</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
</style>

<script setup>
import {ref} from 'vue'

let pokeSprite = ref("");
let pokeName = ref("");
let pokeId = ref("");
let pokeType1 = ref("");
let pokeType2 = ref("");


async function callPokemonApi() {
    let randomPokemonId = Math.floor(Math.random() * 1028) + 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`)
    let pokeJson = await apiCall.json();
    pokeSprite.value = pokeJson.sprites.front_default;
    pokeName.value = pokeJson.species.name;
    pokeId.value = pokeJson.id;
    pokeType1.value = pokeJson.types[0].type.name;
    // Optional second type
    pokeType2.value =
        pokeJson.types[1]
            ? pokeJson.types[1].type.name
            : "";

    console.log(pokeSprite);
    console.log(pokeName);
    console.log(pokeId);
    console.log(pokeType1);
    console.log(pokeType2);
}


// Run once immediately
callPokemonApi();

// Then run every 10 seconds
setInterval(callPokemonApi, 10000);
</script>