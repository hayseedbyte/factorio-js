
const checkboxes = document.querySelectorAll("input");


const toTitleCase = function(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
};

const getIngredients = function (arr) {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.checked) {
      list.push(element.value);
    }
  }
  return list;
};

const getRecipes = function (checked) {
  const output = []
  for (let i = 0; i < recipes.length; i++) {
    const r = recipes[i];
    const ingredients = r.ingredients
    for (let j = 0; j < ingredients.length; j++){
      for (let h = 0; h < checked.length; h++){
        if (checked[h] === ingredients[j].name){
          output.push(r.name)
        }
      }
    }
  }
  return output;
};


const undash = function(str){
  return toTitleCase(str.replaceAll('-', ' '))
};

const itemCounter = (array, item) => {
  return array.filter((currentItem) => currentItem == item).length;
};

const injectHTML = function (arr){
  const htmlArray = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const name = element.name
    const title = undash(name);
    const image = element.image;
    const ingredients = [];
    for (j = 0; j < element.ingredients.length; j++){
      ingredients.push(undash(element.ingredients[j].name))
    }
    const joinIngredients = ingredients.join('</li><li>')
    
    const html = `<div class="item-result">${title}<br><img alt="${name}" class="item-img" src="${image}"/><ul class="result-list"><li>${joinIngredients}</li></ul></div>`
    htmlArray.push(html)
    
  }
  return htmlArray;
}

const button = document.getElementById("show");
button.addEventListener("click", function (e) {
  e.preventDefault()
  const list = getIngredients(checkboxes)
  const result = getRecipes(list)
  const final = [];
  for (let i = 0; i < checkboxes.length; i++) {
    const element = checkboxes[i];
    element.checked = false;
  }
  for (let i =0;i<result.length;i++){
    if(itemCounter(result, result[i]) >= list.length)
      final.push(result[i]);
  }
  const showRecipes = []
  const finalSet = new Set(final);
  console.log(finalSet)
  for (const e of finalSet) {
    for (let j = 0; j < recipes.length; j++){
      if (e === recipes[j].name){
        showRecipes.push(recipes[j])
      }
  
  }

  console.log(showRecipes)
  const resultsDiv = document.querySelector('.show-recipes');
  const resultsHTML = injectHTML(showRecipes);
  resultsDiv.innerHTML = resultsHTML.join("<br>");
}});
