const file = "recipes_link.json";
ingredients = [
  "#steel-plate",
  "#electronic-circuit",
  "#iron-plate",
  "#iron-gear-wheel",
  "#advanced-circuit",
  "#processing-unit",
  "#copper-plate",
  "#pipe",
  "#copper-cable",
  "#battery",
  "#low-density-structure",
  "#explosives",
  "#concrete",
  "#empty-barrel",
  "#iron-stick",
  "#engine-unit",
  "#stone-brick",
  "#transport-belt",
  "#plastic-bar",
  "#radar",
  "#sulfur",
  "#lubricant",
  "#electric-engine-unit",
  "#steel-chest",
  "#inserter",
  "#rocket-control-unit",
  "#speed-module",
  "#grenade",
  "#piercing-rounds-magazine",
  "#sulfuric-acid",
  "#flying-robot-frame",
  "#explosive-cannon-shell",
  "#iron-ore",
  "#solar-panel",
  "#productivity-module",
  "#wall",
  "#fast-inserter",
  "#speed-module-2",
  "#fast-transport-belt",
  "#stone-furnace",
  "#constant-combinator",
  "#laser-turret",
  "#uranium-ore",
  "#roboport",
  "#repair-pack",
  "#raw-fish",
  "#cannon-shell",
  "#train-stop",
  "#portable-fusion-reactor",
  "#underground-belt",
  "#shotgun-shells",
  "#red-wire",
  "#straight-rail",
  "#green-wire",
  "#fast-splitter",
  "#refined-concrete",
  "#fast-underground-belt",
  "#petroleum-gas-barrel",
  "#assembling-machine-2",
  "#firearm-magazine",
  "#copper-ore",
  "#storage-tank",
  "#rocket-launcher",
  "#lubricant-barrel",
  "#solid-fuel",
  "#used-up-uranium-fuel-cell",
  "#personal-roboport",
  "#splitter",
  "#assembling-machine-1",
  "#energy-shield",
  "#electric-furnace",
  "#rocket",
  "#defender-capsule",
  "#express-transport-belt",
  "#sulfuric-acid-barrel",
  "#accumulator",
  "#productivity-module-2",
  "#stack-inserter",
  "#exoskeleton",
  "#distractor-capsule",
  "#personal-battery",
];
const items = document.querySelectorAll("img.item");
// const deselect = function (e) {
//   const nodeMap = e.attributes;
//   const name = nodeMap[3].value;
//   e.style.backgroundColor = "darkgrey";
//   selection.pop(name);
// };
// const item = document.getElementsByClassName("item");
const selection = [];
const select = function (e) {
  e.style.backgroundColor = "#e38728";
  const nodeMap = e.attributes;
  console.log(nodeMap);
  console.log(nodeMap[3].value);
  const name = nodeMap[3].value;
  selection.push(name);
  e.addEventListener("", function () {
    deselect(e);
  });
  console.log(e);
};
const deselect = function (ele) {
  ele.style.backgroundColor = "darkgrey";
  const nodeMap = ele.attributes;
  const name = nodeMap[3].value;
  const x = selection.indexOf(name);
  const y = selection.pop(x);
  return selection;
};
// ingredients.forEach((element) => {
//   const a = document.getElementById(element);
//   a.addEventListener("click", select(a));
// });
for (let i = 0; i < items.length; i++) {
  const e = items[i];
  //   const a = document.querySelector(e);
  console.log(e);
  //   console.log(a);
  e.addEventListener("click", function () {
    select(e);
  });
}
