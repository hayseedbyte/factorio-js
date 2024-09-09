import json
ingredients = ['steel-plate', 'electronic-circuit', 'iron-plate', 'iron-gear-wheel', 'advanced-circuit', 'processing-unit', 'copper-plate', 'pipe', 'copper-cable', 'battery', 'low-density-structure', 'water', 'explosives', 'concrete', 'empty-barrel', 'iron-stick', 'engine-unit', 'stone-brick', 'uranium-238', 'coal', 'transport-belt', 'plastic-bar', 'radar', 'stone', 'sulfur', 'heavy-oil', 'lubricant', 'electric-engine-unit', 'steel-chest', 'inserter', 'wood', 'crude-oil', 'rocket-control-unit', 'light-oil', 'uranium-235', 'petroleum-gas', 'speed-module', 'grenade', 'piercing-rounds-magazine', 'sulfuric-acid', 'rocket-fuel', 'flying-robot-frame',  'explosive-cannon-shell', 'iron-ore', 'solar-panel', 'productivity-module', 'wall', 'fast-inserter', 'speed-module-2', 'fast-transport-belt', 'stone-furnace', 'constant-combinator', 'laser-turret', 'uranium-ore', 'roboport', 'repair-pack', 'raw-fish', 'cannon-shell', 'train-stop', 'portable-fusion-reactor', 'underground-belt', 'shotgun-shells', 'red-wire', 'steam', 'straight-rail', 'green-wire', 'fast-splitter', 'refined-concrete', 'fast-underground-belt', 'petroleum-gas-barrel', 'assembling-machine-2', 'firearm-magazine', 'light-oil-barrel', 'copper-ore', 'storage-tank', 'rocket-launcher', 'lubricant-barrel', 'solid-fuel', 'fast-loader', 'used-up-uranium-fuel-cell', 'personal-roboport', 'splitter', 'assembling-machine-1', 'energy-shield', 'electric-furnace', 'rocket', 'water-barrel', 'defender-capsule', 'express-transport-belt', 'crude-oil-barrel', 'sulfuric-acid-barrel', 'loader', 'accumulator', 'productivity-module-2', 'stack-inserter', 'exoskeleton', 'distractor-capsule', 'small-lamp', 'personal-battery', 'heavy-oil-barrel']
f = open('recipes_link.json')
data = json.load(f)
w = open('input.txt', 'w')
# for recipe in data['recipes']:
#     name =  recipe['name']
#     lower = recipe['name']
#     name = name.replace('-',' ')
#     name = name.title()
#     image = recipe['image']

#     if ingredients.count(lower) >= 1:
# #         print(lower)
#         w.write("<div class='item'>\n\t<label for='" + lower +  "'>" + name + "</label>\n\t<input type='checkbox' id='" + lower + "'><img alt='" + lower + "' class='item' src='" + image + "' id='" + lower + "'>\n</div>")
#         w.write("\n")
# w.close()
recipes = data["recipes"]
for i in ingredients:
    for r in recipes:
        name =  r['name']
        lower = r['name']
        name = name.replace('-',' ')
        name = name.title()
        image = r['image']
        if i == lower:
            # w.write("<li><img alt='" + lower + "' class='item' src='" + image + "' id='" + lower + "'>\n</li>")
             w.write("<li class='item'>\n\t<label for='" + lower +  "'>" + name + "</label>\n\t<input type='checkbox' id='" + lower + "'><img alt='" + lower + "' class='item' src='" + image + "' id='" + lower + "'>\n</li>")
             w.write("\n")
w.close()
f.close()
