const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`)


categories.forEach(value => {

    console.log(`Category: ${value.firstElementChild.textContent}`);

    const elements = value.querySelector('ul');

    console.log(`Elements: ${elements.children.length}`);
});

