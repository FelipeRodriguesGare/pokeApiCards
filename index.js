import { cards } from "./cards.js";

cards("zapdos")
cards("moltres")
cards("articuno")

const button = document.querySelector('.contest');
const input = document.querySelector('#attributes')
const pokes = document.querySelectorAll('.cards')
const add = document.querySelector('.addPoke')
const pokemonToAdd = document.querySelector('.attributeSelector input')
const res = document.querySelector('.reset')


add.addEventListener('click',(evt)=>{
    evt.stopPropagation();
    evt.preventDefault();
    try{
        cards(pokemonToAdd.value.toLowerCase())
        pokemonToAdd.value = ''
    } catch(e){
        console.log(e)
    }
})

button.addEventListener('click', (evt) => {
    let arr = Array.from(pokes[0].children)
    arr.filter((value)=>{
        value.children[0].classList.remove('lost')
    })
    evt.stopPropagation();
    evt.preventDefault();
    const max = arr.reduce((acc, value) => {
        let contest = parseInt(value.querySelector(`.${input.value} .attributeValue`).innerText)
        return (acc <= contest) ? acc = contest : acc = acc 
    },0)

    arr.map((value) => {
        if (parseInt(value.querySelector(`.${input.value} .attributeValue`).innerText) < max) value.children[0].classList.add('lost')
    })
})

res.addEventListener('click', (evt)=>{
    evt.preventDefault();
    evt.stopPropagation();
    let arr = Array.from(pokes[0].children)
    arr.filter((value)=>{
        value.children[0].classList.remove('lost')
    })
})
console.log(pokes)
pokes[0].addEventListener('click', (evt)=>{
    if (evt.target.value) document.getElementById(evt.target.value).parentElement.remove()
    // document.getElementById(evt.target.value).parentElement).remove()
})