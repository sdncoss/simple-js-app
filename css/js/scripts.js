// list of pokemon for the app
let pokemonList = [
    {name: 'Bulbasaur', height:  0.7, type: ['Grass']},
    {name: 'Charmander', height: 0.6, type: ['Fire']},
    {name: 'Squirtle', height: 0.5, type: ['Water']},
    {name: 'Pikachu', height: 0.4, type: ['Electric']},
    {name: 'Clefairy', height: 0.6, type: ['Psychic']},
];

// loop to write pokemon name and height within scale of heights
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.5 && pokemonList[i].height < 1){
        document.write(pokemonList[i].name + ' is average height at ' + pokemonList[i].height + 'cm tall.<br>');
    } else if (pokemonList[i].height <= 0.5){
        document.write(pokemonList[i].name + ' is small in height at ' + pokemonList[i].height + 'cm tall.<br>');
    } else {
        document.write(pokemonList[i].name + ' is tall in height at ' + pokemonList[i].height + 'cm tall. That is BIG!<br>');
    }
}

