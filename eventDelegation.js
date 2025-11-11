let parent = document.getElementById('product-list');

parent.addEventListener('click', (event) => {
    // debugger  //uncomment to chek the working of event in browser inspector
    if (event.target.tagName === 'LI') {
        console.log(event.target.dataset.id);
    }
})//