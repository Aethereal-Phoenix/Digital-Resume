<template>
    <div class="pokemon-card">

        <div class="sprite-container">
            <img :src="pokeSprite" alt="">
        </div>

        <div class="pokemon-info">
            <div class="top-row">
                <span class="name">{{ pokeName }}</span>
                <span class="id">#{{ pokeId }}</span>
            </div>

            <div class="bottom-row">
                <span>{{ pokeType1 }}</span>
                <span>{{ pokeType2 }}</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.pokemon-card {
    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: #1e1e1e;
    border: 2px solid #333;

    padding: 0.75rem 1rem;
    border-radius: 12px;

    color: white;

    min-width: 250px;
}

.sprite-container img {
    width: 80px;
    height: 80px;
}

.pokemon-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 80px;
}

.top-row,
.bottom-row {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.name {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.1rem;
}

.id {
    color: #999;
}

.bottom-row span {
    background-color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;

    text-transform: capitalize;
    font-size: 0.9rem;
}
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
setInterval(callPokemonApi, 20000);
</script>