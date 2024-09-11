const file = "recipes_link.json";
const ingredients = [
  "steel-plate",
  "electronic-circuit",
  "iron-gear-wheel",
  "iron-plate",
  "advanced-circuit",
  "copper-plate",
  "processing-unit",
  "pipe",
  "copper-cable",
  "low-density-structure",
  "explosives",
  "water",
  "engine-unit",
  "empty-barrel",
  "concrete",
  "iron-stick",
  "coal",
  "radar",
  "stone-brick",
  "battery",
  "electric-engine-unit",
  "heavy-oil",
  "lubricant",
  "uranium-238",
  "transport-belt",
  "steel-chest",
  "speed-module",
  "crude-oil",
  "petroleum-gas",
  "plastic-bar",
  "uranium-235",
  "rocket-control-unit",
  "wood",
  "light-oil",
  "stone",
  "sulfuric-acid",
  "flying-robot-frame",
  "sulfur",
  "inserter",
  "grenade",
  "piercing-rounds-magazine",
  "rocket-fuel",
  "iron-ore",
  "fast-inserter",
  "laser-turret",
  "productivity-module",
  "stone-furnace",
  "explosive-cannon-shell",
  "stone-wall",
  "speed-module-2",
  "fast-transport-belt",
  "shotgun-shell",
  "uranium-ore",
  "used-up-uranium-fuel-cell",
  "storage-tank",
  "assembling-machine-1",
  "productivity-module-2",
  "fast-splitter",
  "copper-ore",
  "distractor-capsule",
  "raw-fish",
  "fusion-reactor",
  "exoskeleton",
  "solid-fuel",
  "assembling-machine-2",
  "personal-battery",
  "steam",
  "effeciency-module-3",
  "stack-inserter",
  "water-barrel",
  "solar-panel",
  "personal-roboport",
  "electric-furnace",
  "light-oil-barrel",
  "refined-concrete",
  "cannon-shell",
  "underground-belt",
  "petroleum-gas-barrel",
  "splitter",
  "firearm-magazine",
  "heavy-oil-barrel",
  "crude-oil-barrel",
  "rocket",
  "sulfuric-acid-barrel",
  "rail",
  "rocket-launcher",
  "energy-shield",
  "fast-underground-belt",
  "lubricant-barrel",
  "effeciency-module-2",
  "accumulator",
  "defender-capsule",
];
const items = document.querySelectorAll(".item-img");
const checkboxes = [];
for (let i = 0; i < ingredients.length; i++) {
  const checked = ingredients[i] + "-check";
  checkboxes.push(checked);
}
console.log(checkboxes);
const getIngredients = function (arr) {
  const list = [];
  arr.forEach((element) => {
    console.log(element);
    const input = document.getElementById(element);
    if (input.checked) {
      list.push(input.value);
    }
  });
  return list;
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
});
