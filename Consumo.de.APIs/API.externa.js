function getPokemonData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonData(data))
        .catch(error => console.error('Error:', error));
}

function displayPokemonData(data) {
    const pokemonDataContainer = document.getElementById("pokemonData");
    pokemonDataContainer.innerHTML = `
        <h2 style="color: white">${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <h3 style="color: white">Habilidades:</h3>
        <table style="color: white; width: 200px">
            <tr>
                <th>Nombre</th>
                <th>Tipo</th>
            </tr>
            ${data.abilities.map(ability => `
                <tr>
                    <td>${ability.ability.name}</td>
                    <td>${ability.is_hidden ? "Oculta" : "Normal"}</td>
                </tr>
            `).join('')}
        </table>
    `;
}