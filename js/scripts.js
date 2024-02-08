// IIFE funtion list of pokemon for the app
let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['Grass', 'Poison'] },
        { name: 'Charmander', height: 0.6, types: ['Fire', 'Steel'] },
        { name: 'Squirtle', height: 0.5, types: ['Water', 'Steel'] },
        { name: 'Pikachu', height: 0.4, types: ['Electric', 'Psychic'] },
        { name: 'Clefairy', height: 0.6, types: ['Psychic', 'Fairy'] }
    ];
    // function to add new pokemon to the list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    // function to get all the pokemon in the array
    function getAll() {
        return pokemonList;
    }
    //function using DOM to use the array as a list of buttons
    function addListItem(pokemon) {
        // create variable for the ul of pokemon-list
        let pokemonNames = document.querySelector('.pokemon-list');
        // create the list
        let listItem = document.createElement('li');
        // create buttons for each list item
        let button = document.createElement('button');
        // uses the array to put pokemon names on each button
        button.innerText = pokemon.name;
        // calls the CSS styling for buttons
        button.classList.add('pokemon-button');
        // puts buttons in the list
        listItem.appendChild(button);
        // puts li in ul 
        pokemonNames.appendChild(listItem);
        // create click button event
        button.addEventListener('click', function (event){
            showDetails(pokemon);
        })
    }
    function showDetails(pokemon){
        console.log(pokemon);
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