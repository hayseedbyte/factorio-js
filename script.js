
const checkboxes = document.querySelectorAll("input");


const toTitleCase = function(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

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

const itemCounter = (array, item) => {
  return array.filter((currentItem) => currentItem == item).length;
};
const injectHTML = function (arr){
  const htmlArray = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const name = element.name
    const undashed = element.name.replace('-',' ');
    const title = toTitleCase(undashed);
    const image = element.image;
    const ingredients = element.ingredients
    // for (let j = 0; j < ingredients.length; j++){

    // }
    const html = `${title}<br><img alt="${name}" class="item-img" src="${image}"/>`
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
  const a = finalSet.values()
  for (const e of finalSet) {
    for (let j = 0; j < recipes.length; j++){
      if (e === recipes[j].name){
        showRecipes.push(recipes[j])
      }
  
  }
  // for (let i = 0; i < finalSet.length; i++){
  //     for (let j = 0; j < recipes.length; j++){
  //       if (finalSet[i] === recipes[j].name){
  //         console.log(recipes[j])
  //         showRecipes.push(recipes[j])
  //       }
  //     }
  // }
  console.log(showRecipes)
  const resultsDiv = document.querySelector('.show-recipes');
  const resultsHTML = injectHTML(showRecipes);
  resultsDiv.innerHTML = resultsHTML.join("<br>");
}});
