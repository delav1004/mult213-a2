import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let tallestValue = data.pokemon[0].height;
let tallestName = data.pokemon[0].name;
let smallestValue = data.pokemon[0].height;
let smallestName = data.pokemon[0].name;
let sumHeight = 0;
let avgHeight = 0;
let sumWeight = 0;
let avgWeight = 0;
let highestAvgSpawnsValue = data.pokemon[0].avg_spawns;
let highestAvgSpawnsName = data.pokemon[0].name;
let calculations = "";
let html = "";
for (let i = 0; i < data.pokemon.length; i++) {
    //Calculate the tallest pokemon
    if (data.pokemon[i].height > tallestValue) {
        tallestValue = data.pokemon[i].height;
        tallestName = data.pokemon[i].name;
    }
    //Calculate the smallest pokemon
    if (data.pokemon[i].height < smallestValue) {
        smallestValue = data.pokemon[i].height;
        smallestName = data.pokemon[i].name;
    }
    //Calculate average pokemon height
    let height = parseInt(data.pokemon[i].height);
    sumHeight += height;
    //Calculate average pokemon weight
    let weight = parseInt(data.pokemon[i].weight);
    sumWeight += weight;
    //Calculate the pokemon with highest average spawns
    if (data.pokemon[i].avg_spawns > highestAvgSpawnsValue) {
        highestAvgSpawnsValue = data.pokemon[i].avg_spawns;
        highestAvgSpawnsName = data.pokemon[i].name;
    }
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
avgHeight = sumHeight/data.pokemon.length;
avgWeight = sumWeight/data.pokemon.length;
calculations += `
<p>Number of pokemons: ${data.pokemon.length}</p>
<p>Tallest pokemon: ${tallestName} (${tallestValue})</p>
<p>Smallest pokemon: ${smallestName} (${smallestValue})</p>
<p>Average pokemon height: ${avgHeight};</p>
<p>Average pokemon weight: ${avgWeight};</p>
<p>Pokemon with the highest average spawns: ${highestAvgSpawnsName} (${highestAvgSpawnsValue})</p>
`;

console.log(calculations);

output.innerHTML = calculations + html;