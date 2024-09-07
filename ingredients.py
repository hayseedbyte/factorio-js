
import json
f = open('recipes_link.json')
data = json.load(f)
recipes = data["recipes"]
recipes_a = []
ingredients = ['uranium-ore', 'effectivity-module-2', 'sulfur', 'pipe', 'explosive-cannon-shell', 'electronic-circuit', 'roboport', 'battery', 'heavy-oil', 'repair-pack', 'raw-fish', 'cannon-shell', 'iron-gear-wheel', 'copper-plate', 'iron-ore', 'grenade', 'train-stop', 'concrete', 'fusion-reactor-equipment', 'underground-belt', 'shotgun-shell', 'red-wire', 'solar-panel', 'productivity-module', 'steam', 'rail', 'low-density-structure', 'green-wire', 'fast-splitter', 'inserter', 'refined-concrete', 'wood', 'stone-brick', 'processing-unit', 'fast-underground-belt', 'empty-barrel', 'copper-cable', 'petroleum-gas-barrel', 'assembling-machine-2', 'piercing-rounds-magazine', 'advanced-circuit', 'firearm-magazine', 'light-oil-barrel', 'copper-ore', 'iron-stick', 'coal', 'storage-tank', 'rocket-launcher', 'lubricant-barrel', 'crude-oil', 'uranium-238', 'solid-fuel', 'transport-belt', 'fast-loader', 'used-up-uranium-fuel-cell', 'sulfuric-acid', 'rocket-control-unit', 'lubricant', 'personal-roboport-equipment', 'stone-wall', 'splitter', 'light-oil', 'assembling-machine-1', 'energy-shield-equipment', 'electric-furnace', 'rocket', 'fast-inserter', 'effectivity-module-3', 'speed-module-2', 'water', 'fast-transport-belt', 'steel-plate', 'uranium-235', 'rocket-fuel', 'engine-unit', 'effectivity-module', 'explosives', 'petroleum-gas', 'water-barrel', 'speed-module', 'defender-capsule', 'iron-plate', 'stone-furnace', 'plastic-bar', 'express-transport-belt', 'crude-oil-barrel', 'radar', 'constant-combinator', 'sulfuric-acid-barrel', 'loader', 'electric-engine-unit', 'stone', 'accumulator', 'productivity-module-2', 'stack-inserter', 'exoskeleton-equipment', 'steel-chest', 'distractor-capsule', 'flying-robot-frame', 'small-lamp', 'battery-equipment', 'laser-turret', 'heavy-oil-barrel']

for i in ingredients:
    for recipe in recipes:
        if recipe["name"] == i:
            recipes_a.append(recipe)
recipes_json = json.dumps(recipes_a)
print(recipes_json)
    