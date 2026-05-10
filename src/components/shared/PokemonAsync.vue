<template>

</template>

<script>
async function callPokemonApi() {
    let randomPokemonId = Math.floor(Math.random() * 1028) + 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`)
    let pokeJson = await apiCall.json();
    let pokeSprite = pokeJson.sprites.back_default;;
    let pokeName = pokeJson.species.name;;
    let pokeId = pokeJson.id;
    let pokeType1 = pokeJson.types[0].type.name;
    // Optional second type
    let pokeType2 =
        pokeJson.types[1]
            ? pokeJson.types[1].type.name
            : "None";

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