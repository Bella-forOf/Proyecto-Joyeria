
import "./components/jewel-card.js";

const addButton = document.querySelector(".js-btn-add");
const listElement = document.querySelector(".js-list");
const inputDesc = document.querySelector(".js-input-desc");
    const inputPhoto = document.querySelector(".js-input-photo");
    const inputName = document.querySelector(".js-input-name");
    const inputPrice = document.querySelector(".js-input-price");
const container = document.querySelector(".js-container")


function handleAdd (ev) {
 
    ev.preventDefault();
    paintNew();
};
function paintNew () {
    
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valuePrice = inputPrice.value;
    console.log(inputName);
    listElement.innerHTML += `<jewel-card img="${valuePhoto}" title="${valueName}" collection="ORO 24 kilates"
    description="${valueDesc}"
    price="${valuePrice}"></jewel-card>`
}


addButton.addEventListener("click", handleAdd);


