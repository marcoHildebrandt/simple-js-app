let pokemonRepository = (function () {
    let pokemonList = []
    //added pokemon API link
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    //Add pokemon to a list with the format of a button
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        // Create an event listener to every button
        button.addEventListener("click", function (Event) {
            showDetails(pokemon);
        });
    }
    //function to load pokemon API List
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
    //function to load pokemon API List
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // Find the search form and add an event listener to it
    let searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Get the search term from the input field
        let searchTerm = searchForm.querySelector('input').value.toLowerCase();

        // Filter the pokemon list based on the search term
        let filteredList = pokemonRepository.getAll().filter(function (pokemon) {
            return pokemon.name.toLowerCase().includes(searchTerm);
        });

        // Clear the existing list of pokemon
        let pokemonList = document.querySelector('.pokemon-list');
        pokemonList.innerHTML = '';

        // Display the filtered list of pokemon
        filteredList.forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
            // Get the modal
            let modal = document.getElementById("myModal");


            // Get the title, image, height, and types elements
            let title = document.getElementById("modal-title");
            let image = document.getElementById("modal-image");
            let height = document.getElementById("modal-height");
            let types = document.getElementById("modal-types");
            let closeButton = document.getElementById("close-button");

            // Update the title, image, height, and types with the pokemon details
            title.innerText = pokemon.name;
            image.src = pokemon.imageUrl;
            height.innerText = "Height: " + pokemon.height + "m";
            types.innerText = "Types: " + pokemon.types.map(type => type.type.name).join(", ");

            // Show the modal
            modal.style.display = "block";

            // Add event listener to close button
            closeButton.addEventListener("click", function () {
                // Hide the modal
                modal.style.display = "none";
            });

            // Add event listener to close modal when clicking outside of it
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

        });
    };

})();

//forEach loop
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


