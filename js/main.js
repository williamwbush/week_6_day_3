console.log( document.getElementsByTagName('h1')[0].innerHTML = 'New Text')

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'Something Else'
    }
}

// change text color via click event listener in JS
color_button.addEventListener('click', color_change)

// adding new button via JS 
let button = document.createElement('button')
let button_display = document.createElement('h2')
// add inner text to the button
button.innerHTML = "I am alive!"
document.body.append(button)

button.addEventListener('mouseover', function () {
    button_display.innerHTML = "More JavaScript Info Here..."
    document.body.append(button_display)
})

// grab copied text -- then place into clipboard
const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase())
    event.preventDefault();
})

// Grabbing form data from a submit event
const form = document.querySelector('#testDataForm')
// console.log(form)

// Add event listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    // prevents page reloading
    console.log(event)
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
} )