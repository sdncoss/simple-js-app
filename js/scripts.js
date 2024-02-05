// funtion list of pokemon for the app
let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] },
        { name: 'Charmander', height: 0.6, types: ['Fire', 'Steel'] },
        { name: 'Squirtle', height: 0.5, types: ['Water', 'Steel'] },
        { name: 'Pikachu', height: 0.4, types: ['Electric', 'Psychic'] },
        { name: 'Clefairy', height: 0.6, types: ['Psychic', 'Fairy'] }
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    };
})();
//adding a new pokemon to list
pokemonRepository.add({name: 'Rattata', height: 0.3, types: ['Grass', 'Ghost']});


//new loop utilizing forEach to iterate through each pokemon name and height
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + 'cm tall.<br>');
});




// old extended loop to write pokemon name and height within scale of heights
/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.5 && pokemonList[i].height < 1) {
        document.write(pokemonList[i].name + ' is average height at ' + pokemonList[i].height + 'cm tall.<br>');
    } else if (pokemonList[i].height <= 0.5) {
        document.write(pokemonList[i].name + ' is small in height at ' + pokemonList[i].height + 'cm tall.<br>');
    } else {
        document.write(pokemonList[i].name + ' is tall in height at ' + pokemonList[i].height + 'cm tall. That is BIG!<br>');
    }
}*/



