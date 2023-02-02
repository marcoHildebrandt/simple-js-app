let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Kangaskhan",
            height: 2.2,
            types: "Normal"
        },
        {
            name: "Snorlax",
            height: 2.1,
            types: "Normal"
        },
        {
            name: "Lapras",
            height: 2.5,
            types: ["Ice", "Water"]
        },
        {
            name: "Aron",
            height: 0.4,
            types: ["Steel", "Rock"]
        },
        {
            name: "Poochyena",
            height: 0.5,
            types: "Dark"
        },
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();
//for loop
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + "<h1>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "</h1>" + "</p>");
//     if (pokemonList[i].height >= 2.0 && pokemonList[i].height <= 2.4) {
//         document.write(" - Wow, that's big! ")
//     } else if (pokemonList[i].height >= 2.5)
//         document.write(" - Wow, that's really big! ")

// }

//forEach loop
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    // document.write("<p>" + "<h1>" + pokemon.name + " (height: " + pokemon.height + ") " + "</h1>" + "</p>");
    // if (pokemon.height >= 2.0 && pokemon.height <= 2.4) {
    //     document.write(" - Wow, that's big! ");
    // } else if (pokemon.height >= 2.5) {
    //     document.write(" - Wow, that's really big! ")
    // }
});

