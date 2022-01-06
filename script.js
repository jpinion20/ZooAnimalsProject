//FIRST - DOMCONTENTLOADED
let arr;
function fetchAnimals() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/4')
    .then(res => res.json())
    .then(data => data.forEach(addAnimalsToDiv))
}
function addAnimalsToDiv(animal) {
    const imageLocation = document.getElementById('image')
    imageLocation.src = animal.image_link
}
window.addEventListener('DOMContentLoaded', fetchAnimals)
//SECOND - CLICK EVENT - HEART LIKER
// target #heartButton
//addEventListener - Click
// function should change heart from empty heart to full heart when clicked, if empty display === empty, if click display full heart
//class .heart will need a new span with the heart image, add JS to make heart clickable
const heartbutton = document.querySelector("heartButton");
heartButton.addEventListener("click", function() {
    const curColour = heartButton.style.backgroundColor;
    heartButton.style.backgroundColor = curColour === 'white' ? 'green' : 'white';
});
//THIRD - SUBMIT - CAPTION GENERATOR
//target form - #captionForm
//addEventListner - Submit
// function: will append new Caption to space below form via p tag
// take what the user types in and display it
// target where the user input is
//create p tag
//take user input and append the p
function addUserCaption(event) {
    event.preventDefault();
    const submittedCaptions = document.getElementById('submittedCaptions')
    const userCaption = event.target["captions"].value
    // document.getElementById('captions');
    let addedCaption = document.createElement('p');
    addedCaption.textContext = userCaption.value;
    submittedCaptions.appendChild(addedCaption);
    event.target.reset();
}
const captionForm = document.getElementById('captionForm')
captionForm.addEventListener('submit', addUserCaption);
// document.getElementById('captions').value = document.getElementById('newCaption').value