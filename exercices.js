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

//exo 6 Aventurier, voici ma boutique !

const potions = [
    {
      nom: "Potion de soin",
      description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
      prix: 10,
    },
    {
      nom: "Potion de sommeil",
      description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
      prix: 50,
    },
];

function afficherPotions(){

const liste_potion_element = document.querySelector("#liste_potions");

const template_potion_element = document.querySelector("#template_potion");

liste_potion_element.innerHTML = '';

potions.forEach(potion => {
  
    const cloned_template = template_potion_element.content.cloneNode(true);

    cloned_template.querySelector('.nom_potion').textContent = potion.nom;
    cloned_template.querySelector('.prix_potion').textContent = potion.description;
    cloned_template.querySelector('.card-text.description_potion').textContent = potion.prix;

    liste_potion_element.appendChild(cloned_template);
});
}
afficherPotions();

//exo 7 Plus de potions, nous avons besoin de plus de potions !

function addPotions(nom, description, prix){
    potions.push({nom, description, prix });
    afficherPotions();
}

const form_element = document.querySelector(".form");
form_element.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form_element);
    
    const nom = formData.get('nom');
    const description = formData.get('description');
    const prix = formData.get('prix');

    addPotions(nom, description, prix);

    form_element.reset();
});
