import json
import re
import sys
ingredients = ['steel-plate', 'electronic-circuit', 'iron-gear-wheel', 'iron-plate', 'advanced-circuit', 'copper-plate', 'processing-unit', 'pipe', 'copper-cable', 'low-density-structure', 'explosives', 'water', 'empty-barrel', 'engine-unit', 'concrete', 'iron-stick', 'coal', 'heavy-oil', 'uranium-238', 'electric-engine-unit', 'lubricant', 'radar', 'battery', 'stone-brick', 'steel-chest', 'transport-belt', 'speed-module', 'petroleum-gas', 'plastic-bar', 'stone', 'light-oil', 'uranium-235', 'rocket-control-unit', 'wood', 'crude-oil', 'inserter', 'rocket-fuel', 'sulfur', 'grenade', 'piercing-rounds-magazine', 'sulfuric-acid', 'flying-robot-frame', 'stone-furnace', 'iron-ore', 'explosive-cannon-shell', 'speed-module-2', 'fast-inserter', 'laser-turret', 'stone-wall', 'productivity-module', 'used-up-uranium-fuel-cell', 'distractor-capsule', 'solid-fuel', 'exoskeleton', 'raw-fish', 'crude-oil-barrel', 'underground-belt', 'light-oil-barrel', 'fast-underground-belt', 'fast-transport-belt', 'rail', 'assembling-machine-1', 'water-barrel', 'rocket', 'effeciency-module-2', 'assembling-machine-2', 'fusion-reactor', 'shotgun-shell', 'petroleum-gas-barrel', 'effeciency-module-3', 'energy-shield', 'refined-concrete', 'personal-battery', 'fast-splitter', 'productivity-module-2', 'personal-roboport', 'firearm-magazine', 'steam', 'sulfuric-acid-barrel', 'heavy-oil-barrel', 'accumulator', 'defender-capsule', 'cannon-shell', 'electric-furnace', 'storage-tank', 'rocket-launcher', 'uranium-ore', 'lubricant-barrel', 'stack-inserter', 'solar-panel', 'copper-ore', 'splitter']
# output = []
# # Opening JSON file

f = open('recipes_link.json')
names = []
search = sys.argv
# search = sys.argv[1]
print(search)
# returns JSON object as a dictionary
data = json.load(f)
link = "https://wiki.factorio.com/images/"
recipes = data["recipes"]
recipes_list = []
for i in ingredients:
    for r in recipes:
        recipes_list.append(r['name'])
        name =  r['name']
        lower = r['name']
        name = name.replace('-',' ')
        name = name.capitalize()

        image = r['image']
# # Iterating through the json list
# for recipe in data['recipes']:
#     names.append(recipe['name'])
#     name = recipe['name']
#     name = name.replace('-','_')
#     name = name.capitalize()
#     image = link + name + '.png'
#     recipe['image'] = image
#     for x in recipe['ingredients']:
#         if x['name'] == search:
#             output.append(recipe['name'])
#     # print(i)

# # Closing file
# f.close()
# j = open('recipes_link.json', 'w')
# j.write(json.dumps(data))
# j.close()
# w = open('names.txt', 'w')
# for name in names:
#     w.write(name)
#     w.write('\n')
# w.close()

# print(output)

# link = "https://wiki.factorio.com/images/"
# for o in output:
#     o = o.replace('-','_')

#     o = o.capitalize()
#     image = link + o + '.png'


#     print(image)
# l = open('links.txt','w')
# for n in names:
#     n = n.replace('-','_')
#     n = n.capitalize()
#     image = link + n + '.png'
#     l.write(image)
#     l.write('\n')
# l.close()
g = open("recipes_link2.json", 'w')
for i in ingredients:
    o = i.replace('-','_')
    o = o.capitalize()
    image = link + o + '.png'
    print(i)
    print(recipes_list.count(i))
    if recipes_list.count(i) == 0:
        i_dict = dict(name=i,image=image,ingredients=[])
        print(i_dict)
        recipes.append(i_dict)
print(recipes)
g.write(json.dumps(recipes))
g.close()