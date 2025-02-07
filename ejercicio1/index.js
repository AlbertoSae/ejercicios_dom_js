//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector(".showme"));

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado") );

//1.3 Usa querySelector para mostrar por consola todos los p
const allP=document.querySelectorAll("p");

for(let i=0; i<allP.length;i++){
  console.log(allP[i]);  
}

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons= document.querySelectorAll(".pokemon");

for(let i=0; i<pokemons.length;i++){
    console.log(pokemons[i]);  
}

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const tester= document.querySelectorAll('[data-function="testMe"]');
for(let i=0; i<tester.length;i++){
    console.log(tester[i]);  
}


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const tester2= document.querySelectorAll('[data-function="testMe"]');
console.log(tester2[2]);