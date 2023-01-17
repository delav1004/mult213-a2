import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
for (let i = 0; i < data.pokemon.length; i++) {
    // Pokemons
    html += `<div class="pokemon">
    <p>${data.pokemon[i].num}<br> 
    ${data.pokemon[i].name}<br>
    <img src="${data.pokemon[i].img}"><br>
    Type: ${data.pokemon[i].type}<br>
    Height: ${data.pokemon[i].height}<br>
    Weight: ${data.pokemon[i].weight}<br>
    Candy: ${data.pokemon[i].candy}<br>
    Candy count: ${data.pokemon[i].candy_count}<br>
    Egg: ${data.pokemon[i].egg}<br>
    Spawn chance: ${data.pokemon[i].spawn_chance}<br>
    Avg. spawns: ${data.pokemon[i].avg_spawns}<br>
    Spawn time: ${data.pokemon[i].spawn_time}<br>
    Multipliers: ${data.pokemon[i].multipliers}<br>
    Weaknesses: ${data.pokemon[i].weaknesses}<br>
    Next Evolution: ${data.pokemon[i].next_evolution}<br>
    </p>
    </div>`;
}
output.innerHTML = html;