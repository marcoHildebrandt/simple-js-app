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
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ");
}