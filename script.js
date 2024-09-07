const file = "recipes_link.json"


const dom = document.getElementById('selection')

const writeDom = function(array) {
    for (let i = 0; i < array.length; i++) {
        const itemWrapper = dom.appendChild(document.createElement('div'))
        const item = itemWrapper.appendChild(document.createElement("input")) 
        itemWrapper.classList.add('wrapper')
        item.classList.add('item')
    }

}

dom.addEventListener("DOMContentLoaded", (event) => {writeDom(recipes)});
