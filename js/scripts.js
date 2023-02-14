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


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
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
    //document.write replaced
    // document.write("<p>" + "<h1>" + pokemon.name + " (height: " + pokemon.height + ") " + "</h1>" + "</p>");
    // if (pokemon.height >= 2.0 && pokemon.height <= 2.4) {
    //     document.write(" - Wow, that's big! ");
    // } else if (pokemon.height >= 2.5) {
    //     document.write(" - Wow, that's really big! ")
    // }

    // for loop: was made obsolete by forEach loop
//for loop
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + "<h1>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "</h1>" + "</p>");
//     if (pokemonList[i].height >= 2.0 && pokemonList[i].height <= 2.4) {
//         document.write(" - Wow, that's big! ")
//     } else if (pokemonList[i].height >= 2.5)
//         document.write(" - Wow, that's really big! ")

// }

