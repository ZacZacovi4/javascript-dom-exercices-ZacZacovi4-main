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

// exo 5 Faisons un peu de magie 🪄

const button_red_element = document.querySelector("#btn_change_red");
const button_blue_element = document.querySelector("#btn_change_blue");
const button_green_element = document.querySelector("#btn_change_green");

const all_carre_element = document.querySelectorAll("#boites_magique .boite");
const first_carre_element = all_carre_element[0];
const second_carre_element = all_carre_element[1];
const third_carre_element = all_carre_element[2];


function oneColorChange(element, color){
    element.style.backgroundColor = color;
}
button_red_element.addEventListener('click', function(){
    oneColorChange(first_carre_element, "red");
});

button_blue_element.addEventListener('click', function(){
    oneColorChange(first_carre_element, "blue");
    oneColorChange(second_carre_element, "blue");
});

function allColorChange(element){
    element.forEach(el => {
        el.style.backgroundColor = "green";
    });  
}
button_green_element.addEventListener('click', function(){
    allColorChange(all_carre_element);
});



