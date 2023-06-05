

const totalCategories = document.querySelectorAll('.item') 
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(liItem => { 
console.log(`Category: ${liItem.firstElementChild.textContent}`)
console.log(`Elements: ${liItem.lastElementChild.children.length}`);
});