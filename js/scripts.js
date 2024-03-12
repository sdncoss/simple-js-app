// IIFE function list of pokemon for the app
let pokemonRepository = (function () {
    let pokemonList = [];
    //adding the API list
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //modal function
    function showModal(pokemon) {
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');
        modalTitle.empty();
        modalBody.empty();

        let nameElement = $('<h3>' + pokemon.name + '</h3>');
        let imgElement = $('<img class="modal-img" style="width: 50%">').attr("src", pokemon.imageUrl);
        let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        let typesElement = $("<p>" + "Types: " + (pokemon.types || []).map((t) => t.type.name).join(", ") + "</p>");


        // Appending elements to the modal
        modalTitle.append(nameElement);
        modalBody.append(imgElement);
        modalBody.append(heightElement);
        modalBody.append(typesElement);

    }

    // function to add new pokemon to the list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    // function to get all the pokemon in the array
    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    };

    //function using DOM to use the array as a list of buttons
    function addListItem(pokemon) {
        // create variable for the ul of pokemon-list
        let pokemonNames = document.querySelector('.list-group');
        // create the list
        let listItem = document.createElement('li');
        // creates class for bootstrap
        listItem.classList.add('list-group-item');

        // puts li in ul 
        pokemonNames.appendChild(listItem);
        // create buttons for each list item
        let button = document.createElement('button');
        // uses the array to put pokemon names on each button
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-lg', 'btn-block', 'list-btn');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        listItem.appendChild(button);

        // opens modal of the pokemon information when button is clicked
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    // loading API function to get names and details
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    // loads API specific details
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            //  add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();
//adding a new pokemon to list
//pokemonRepository.add({ name: 'Rattata', height: 0.3, types: ['Grass', 'Ghost'] });


//new loop utilizing forEach with DOM to iterate through each pokemon name
//pokemonRepository.getAll().forEach(function (pokemon) {
//    pokemonRepository.addListItem(pokemon);
//});
pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});