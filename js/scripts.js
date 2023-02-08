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
        });
    }
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

