const checkboxes = document.querySelectorAll("input");

const toTitleCase = function (str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
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
  const output = [];
  for (let i = 0; i < recipes.length; i++) {
    const r = recipes[i];
    const ingredients = r.ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      for (let h = 0; h < checked.length; h++) {
        if (checked[h] === ingredients[j].name) {
          output.push(r.name);
        }
      }
    }
  }
  return output;
};

const undash = function (str) {
  return toTitleCase(str.replaceAll("-", " "));
};

const itemCounter = (array, item) => {
  return array.filter((currentItem) => currentItem == item).length;
};

const visible = function (element) {
  const lastChild = element.lastElementChild;
  lastChild.classList.replace("hidden", "visible");
};

const hidden = function (element) {
  const lastChild = element.lastElementChild;
  lastChild.classList.replace("visible", "hidden");
};

const injectHTML = function (arr) {
  const htmlArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const name = element.name;
    const title = undash(name);
    const image = element.image;
    const ingredients = [];
    for (j = 0; j < element.ingredients.length; j++) {
      ingredients.push(undash(element.ingredients[j].name));
    }
    const joinIngredients = ingredients.join("</li><li>");

    const html = `<div class="item-result"><div class="item-title"><h3>${title}</h3><img alt="${name}" class="item-img" src="${image}"/></div><div class="item-body hidden"><ul class="result-list"><li>${joinIngredients}</li></ul></div></div>`;
    htmlArray.push(html);
  }
  return htmlArray;
};

const button = document.getElementById("show");
button.addEventListener("click", function (e) {
  e.preventDefault();
  const list = getIngredients(checkboxes);
  const result = getRecipes(list);
  const final = [];
  for (let i = 0; i < checkboxes.length; i++) {
    const element = checkboxes[i];
    element.checked = false;
  }
  for (let i = 0; i < result.length; i++) {
    if (itemCounter(result, result[i]) >= list.length) {
      final.push(result[i]);
    }
  }

  const showRecipes = [];
  const finalSet = new Set(final);
  console.log(finalSet);
  for (const e of finalSet) {
    for (let j = 0; j < recipes.length; j++) {
      if (e === recipes[j].name) {
        showRecipes.push(recipes[j]);
      }
    }

    console.log(showRecipes);
    const resultsDiv = document.querySelector(".show-recipes");
    const resultsHTML = injectHTML(showRecipes);
    console.log("showRecipes");
    console.log(showRecipes.length);

    if (showRecipes.length === 0) {
      while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
      }
    } else {
      resultsDiv.innerHTML = resultsHTML.join("<br>");
    }
    // resultsDiv.innerHTML = resultsHTML.join("<br>");
    const itemResult = document.querySelectorAll(".item-result");
    for (let i = 0; i < itemResult.length; i++) {
      const r = itemResult[i];
      r.addEventListener("mouseover", function () {
        setTimeout(visible(r), 50000);
      });
      r.addEventListener("mouseout", function () {
        setTimeout(hidden(r), 1000);
      });
    }
  }
});
