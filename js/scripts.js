// list of pokemon for the app
let pokemonList = [
    {name: 'Bulbasaur', height:  0.7, type: ['Grass','Poison']},
    {name: 'Charmander', height: 0.6, type: ['Fire', 'Steel']},
    {name: 'Squirtle', height: 0.5, type: ['Water', 'Steel']},
    {name: 'Pikachu', height: 0.4, type: ['Electric', 'Psychic']},
    {name: 'Clefairy', height: 0.6, type: ['Psychic', 'Fairy']},
];

// loop to write pokemon name and height
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.5 && pokemonList[i].height < 1){
        document.write(pokemonList[i].name + ' is average at ' + pokemonList[i].height + 'cm tall.<br> ');
    } else if (pokemonList[i].height <= 0.5){
        document.write(pokemonList[i].name + ' is small at ' + pokemonList[i].height + 'cm tall.<br> ');
    } else {
        document.write(pokemonList[i].name + ' is tall at ' + pokemonList[i].height + 'cm tall. That is BIG!<br>');
    }
}
