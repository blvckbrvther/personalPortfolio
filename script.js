// Add a click event listener to a button
const button = document.querySelector('#my-button');
button.addEventListener('click', function() {
    alert('You clicked the button!');
});

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    console.log('You scrolled the window!');
});

// Add a function to change the background color of an element
function changeColor() {
    const element = document.querySelector('#my-element');
    element.style.backgroundColor = 'red';
}
