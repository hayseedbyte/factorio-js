import recipes from "./recipes_link2.json" with { type: "json" };

const checkboxes = document.querySelectorAll("input");
const ingredients = checkboxes.values();
// console.log(ingredients);
// console.log(checkboxes);
// for (let i = 0; i < ingredients.length; i++) {
//   const checked = ingredients[i] + "-check";
//   checkboxes.push(checked);
// }
// console.log(checkboxes);
const selection = []
const getIngredients = function (arr) {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    if (element.checked) {
      list.push(element.value);
    }
  }
  console.log(list);

  return list;
};
const getRecipes = function (arr) {
  const output = []
  for (let i = 0; i < recipes.length; i++) {
    const r = recipes[i];
    const x = r.ingredients
    console.log(x);
    for (let o = 0; o < arr.length; o++) {
      const e = arr[o];
      if (x.name === e) {
        output.push(recipes[i].name);
      }
    }
  }
  console.log(output);
  return output;
};

// const deselect = function (e) {
//   const nodeMap = e.attributes;
//   const name = nodeMap[3].value;
//   e.style.backgroundColor = "darkgrey";
//   selection.pop(name);
// };
// const item = document.getElementsByClassName("item");
const button = document.getElementById("show");
button.addEventListener("click", function () {
  console.log("clicked");
  const selection = getIngredients(checkboxes);
  console.log(selection);
  console.log('selection');
  const output = getRecipes(selection);
  // for (let i = 0; i < checkboxes.length; i++) {
  //   const element = checkboxes[i];
  //   element.checked = false;
  // }
  console.log(output);
});
