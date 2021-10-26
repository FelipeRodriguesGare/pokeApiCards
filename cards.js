import apiRequest from "./api-Request.js";

export const cards = async (pokemon) => {
    try{
        const pokeRequest = new apiRequest()
        const pokeObject = await pokeRequest.getPokemonObject(pokemon)
        const card = document.createElement('div')
        const cardContainer = document.querySelector('div.cards')
        card.innerHTML = `
        <div class="card ${pokeObject.type}" id="${pokemon}">
            <input type="image" src="https://cdn-icons-png.flaticon.com/512/929/929487.png" class="removePokemon" value="${pokemon}" />
            <img src="${pokeObject.image}" class="img-wrapper" alt="" srcset="">
            <div class="attributes-wrapper" >
                <div class="pokemonAttributes life" ><p>LIFE</p> <p class="attributeValue">${pokeObject.hp}</p></div>
                <div class="pokemonAttributes attack" ><p>ATTACK</p> <p class="attributeValue">${pokeObject.attack}</p></div>
                <div class="pokemonAttributes defense" ><p>DEFENSE</p> <p class="attributeValue">${pokeObject.defense}</p></div>
                <div class="pokemonAttributes speed" ><p>SPEED</p> <p class="attributeValue">${pokeObject.speed}</p></div>
            </div>
        </div>`;    
        cardContainer.append(card);
    } catch(error){
        return error
    }
}

