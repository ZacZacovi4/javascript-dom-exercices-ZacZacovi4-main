// exo 1 Quel est le titre de la boutique

const h1_element = document.querySelector("h1");
console.log(h1_element);

// exo 2 Des informations manquent !

const div_description_boutique_element = document.querySelector("#description_boutique");
const new_description_boutique_element = document.createElement('p');
new_description_boutique_element.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
div_description_boutique_element.appendChild(new_description_boutique_element);

// exo 3 Roger, enfoiré !

const span_element = document.querySelector("#blague_de_roger_le_sorcier");
span_element.remove();

// exo 4 Archibald n'est pas là, appelons le !

const call_archibald_element = document.querySelector("#call_archibald");

call_archibald_element.addEventListener('click', function(){
    alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`);
});

//or

// function showAlert(){
//     alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`);
// }
// call_archibald_element.addEventListener('click', showAlert);

