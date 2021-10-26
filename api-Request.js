class apiRequest {

    async makeRequest(url) {
        try{
            const response = await fetch(url)
            return await response.json();
        } catch {
            throw new Error ("Server request failed!")
        }
    }

    pokemonAttribute = (value) => {
        if (!value.stat.name.includes('-')) return {prop: value.stat.name, value: value.base_stat};
    }

    async getPokemonObject(pokemon) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        try {
            const response = await this.makeRequest(url);
            const final = response.stats.reduce((acc, value) => {
                const property = this.pokemonAttribute(value)
                property? acc[property.prop] = property.value : {...acc}
                return acc
            },{})
            final.type = response.types[0].type.name
            final.image = response.sprites.other["official-artwork"].front_default
            return final
        } catch (err) {
            console.log(err)
        }
    }

}

export default apiRequest