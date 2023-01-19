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
    document.write("<p>" + "<h1>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "</h1>" + "</p>");
    if (pokemonList[i].height >= 2.0 && pokemonList[i].height <= 2.4) {
        document.write(" - Wow, that's big! ")
    } else if (pokemonList[i].height >= 2.5)
        document.write(" - Wow, that's really big! ")
   
} 
