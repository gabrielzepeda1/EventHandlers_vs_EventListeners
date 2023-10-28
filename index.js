const button = document.querySelector('.btn')

//An object can only have ONE event handler for a specific event, but it can have multiple event listeners for the event. 

button.addEventListener("click", () => { 
    console.log("first button clicked");
});
button.addEventListener("click", () => { 
    console.log("second button clicked");
});

button.onclick = () => { 
    console.log("first event handler");
}

button.onclick = () => { 
    console.log("second event handler");
}

