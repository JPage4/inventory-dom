const newHomeInventory = JSON.parse(localStorage.getItem("newHomeInventory"))
const newHomeElement = document.getElementById("inventory") 

for (let key in newHomeInventory) {

for (let i = 0; i < newHomeInventory[key].length; i++) {
    const currentInventory = newHomeInventory[key][i];
 

newHomeElement.innerHTML += `
<article class="inventory">
<section class="${currentInventory.type}">
    <h2 class="${currentInventory.type}__name">${currentInventory.name}</h2>
        <div class="${currentInventory.type}__location">Location--${currentInventory.location}</div>
        <div class="${currentInventory.type}__description">Description--${currentInventory.description}</div>
</section>
</article>
`}
}

