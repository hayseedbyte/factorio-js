import json
# ingredients = ['steel-plate', 'electronic-circuit', 'iron-gear-wheel', 'iron-plate', 'advanced-circuit', 'copper-plate', 'processing-unit', 'pipe', 'copper-cable', 'low-density-structure', 'explosives', 'water', 'engine-unit', 'empty-barrel', 'concrete', 'iron-stick', 'coal', 'radar', 'stone-brick', 'battery', 'electric-engine-unit', 'heavy-oil', 'lubricant', 'uranium-238', 'transport-belt', 'steel-chest', 'speed-module', 'crude-oil', 'petroleum-gas', 'plastic-bar', 'uranium-235', 'rocket-control-unit', 'wood', 'light-oil', 'stone', 'sulfuric-acid', 'flying-robot-frame', 'sulfur', 'inserter', 'grenade', 'piercing-rounds-magazine', 'rocket-fuel', 'iron-ore', 'fast-inserter', 'laser-turret', 'productivity-module', 'stone-furnace', 'explosive-cannon-shell', 'stone-wall', 'speed-module-2', 'fast-transport-belt', 'shotgun-shell', 'uranium-ore', 'used-up-uranium-fuel-cell', 'storage-tank', 'assembling-machine-1', 'productivity-module-2', 'fast-splitter', 'copper-ore', 'distractor-capsule', 'raw-fish', 'fusion-reactor', 'exoskeleton', 'solid-fuel', 'assembling-machine-2', 'personal-battery', 'steam', 'efficiency-module-3', 'stack-inserter', 'water-barrel', 'solar-panel', 'personal-roboport', 'electric-furnace', 'light-oil-barrel', 'refined-concrete', 'cannon-shell', 'underground-belt', 'petroleum-gas-barrel', 'splitter', 'firearm-magazine', 'heavy-oil-barrel', 'crude-oil-barrel', 'rocket', 'sulfuric-acid-barrel', 'rail', 'rocket-launcher', 'energy-shield', 'fast-underground-belt', 'lubricant-barrel', 'efficiency-module-2', 'accumulator', 'defender-capsule']

ingredients = ['steel-plate', 'electronic-circuit', 'iron-gear-wheel', 'iron-plate', 'advanced-circuit', 'copper-plate', 'processing-unit', 'pipe', 'copper-cable', 'low-density-structure', 'water', 'explosives', 'engine-unit', 'empty-barrel', 'coal', 'iron-stick', 'concrete', 'battery', 'uranium-238', 'electric-engine-unit', 'radar', 'transport-belt', 'heavy-oil', 'lubricant', 'steel-chest', 'stone-brick', 'plastic-bar', 'petroleum-gas', 'rocket-control-unit', 'crude-oil', 'speed-module', 'stone', 'wood', 'light-oil', 'uranium-235', 'sulfur', 'grenade', 'flying-robot-frame', 'sulfuric-acid', 'inserter', 'rocket-fuel', 'piercing-rounds-magazine', 'stone-furnace', 'fast-inserter', 'laser-turret', 'productivity-module', 'iron-ore', 'speed-module-2', 'explosive-cannon-shell', 'stone-wall', 'crude-oil-barrel', 'water-barrel', 'personal-roboport', 'fast-splitter', 'effeciency-module-3', 'rocket-launcher', 'defender-capsule', 'fast-underground-belt', 'raw-fish', 'effeciency-module-2', 'productivity-module-2', 'underground-belt', 'electric-furnace', 'solar-panel', 'storage-tank', 'stack-inserter', 'energy-shield', 'refined-concrete', 'light-oil-barrel', 'solid-fuel', 'shotgun-shell', 'firearm-magazine', 'used-up-uranium-fuel-cell', 'splitter', 'rocket', 'exoskeleton', 'rail', 'petroleum-gas-barrel', 'distractor-capsule', 'fast-transport-belt', 'cannon-shell', 'assembling-machine-2', 'heavy-oil-barrel', 'lubricant-barrel', 'uranium-ore', 'fusion-reactor', 'assembling-machine-1', 'steam', 'accumulator', 'sulfuric-acid-barrel', 'copper-ore', 'personal-battery']
f = open('recipes_link2.json')
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
recipes_list =[]

# for i in ingredients:
#     for r in recipes:
#         if i == r["name"]:
#             name =  r['name']
#             lower = r['name']
#             name = name.replace('-',' ')
#             name = name.title()
#             image = r['image']
#             if i == lower:
#             # w.write("<li><img alt='" + lower + "' class='item' src='" + image + "' id='" + lower + "'>\n</li>")
#                  w.write("<div class='item'>\n\t<label for='" + lower +  "-check'>" + name + "</label>\n\t<img alt='" + lower + "' class='item-img' src='" + image + "' id='" + lower + "'>\n<input type='checkbox' id='" + lower + "-check' value='" + lower + "'></div>")
#                  w.write("\n")

for r in recipes:
    if r["count"] > 0:
        name =  r['name']
        lower = r['name']
        name = name.replace('-',' ')
        name = name.title()
        image = r['image']
        # w.write("<li><img alt='" + lower + "' class='item' src='" + image + "' id='" + lower + "'>\n</li>")
        w.write("<div class='item'>\n\t<label for='" + lower +  "-check'>" + name + "</label>\n\t<img alt='" + lower + "' class='item-img' src='" + image + "' id='" + lower + "'>\n<input type='checkbox' id='" + lower + "-check' value='" + lower + "'></div>")
        w.write("\n")
w.close()
f.close()
# g = open("recipes_link1.json", 'w')
# link = "https://wiki.factorio.com/images/"

# for i in ingredients:
#     o = i.replace('-','_')
#     o = o.capitalize()
#     image = link + o + '.png'
#     print(i)
#     print(recipes_list.count(i))
#     if recipes_list.count(i) == 0:
#         i_dict = dict(name=i,image=image)
#         print(i_dict)
#         recipes.append(i_dict)
# g.write(json.dumps(recipes))
# g.close()