// IIFE funtion list of pokemon for the app
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
    //function using DOM to use the array as a list of buttons
    function addListItem(pokemon) {
        let pokemonNames = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        pokemonNames.appendChild(listItem);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();
//adding a new pokemon to list
pokemonRepository.add({name: 'Rattata', height: 0.3, types: ['Grass', 'Ghost']});


//new loop utilizing forEach with DOM to iterate through each pokemon name
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});