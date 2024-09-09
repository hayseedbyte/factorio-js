import json
import sys

def main():
    ingredients = ['uranium-ore', 'effectivity-module-2', 'sulfur', 'pipe', 'explosive-cannon-shell', 'electronic-circuit', 'roboport', 'battery', 'heavy-oil', 'repair-pack', 'raw-fish', 'cannon-shell', 'iron-gear-wheel', 'copper-plate', 'iron-ore', 'grenade', 'train-stop', 'concrete', 'fusion-reactor-equipment', 'underground-belt', 'shotgun-shell', 'red-wire', 'solar-panel', 'productivity-module', 'steam', 'rail', 'low-density-structure', 'green-wire', 'fast-splitter', 'inserter', 'refined-concrete', 'wood', 'stone-brick', 'processing-unit', 'fast-underground-belt', 'empty-barrel', 'copper-cable', 'petroleum-gas-barrel', 'assembling-machine-2', 'piercing-rounds-magazine', 'advanced-circuit', 'firearm-magazine', 'light-oil-barrel', 'copper-ore', 'iron-stick', 'coal', 'storage-tank', 'rocket-launcher', 'lubricant-barrel', 'crude-oil', 'uranium-238', 'solid-fuel', 'transport-belt', 'fast-loader', 'used-up-uranium-fuel-cell', 'sulfuric-acid', 'rocket-control-unit', 'lubricant', 'personal-roboport-equipment', 'stone-wall', 'splitter', 'light-oil', 'assembling-machine-1', 'energy-shield-equipment', 'electric-furnace', 'rocket', 'fast-inserter', 'effectivity-module-3', 'speed-module-2', 'water', 'fast-transport-belt', 'steel-plate', 'uranium-235', 'rocket-fuel', 'engine-unit', 'effectivity-module', 'explosives', 'petroleum-gas', 'water-barrel', 'speed-module', 'defender-capsule', 'iron-plate', 'stone-furnace', 'plastic-bar', 'express-transport-belt', 'crude-oil-barrel', 'radar', 'constant-combinator', 'sulfuric-acid-barrel', 'loader', 'electric-engine-unit', 'stone', 'accumulator', 'productivity-module-2', 'stack-inserter', 'exoskeleton-equipment', 'steel-chest', 'distractor-capsule', 'flying-robot-frame', 'small-lamp', 'battery-equipment', 'laser-turret', 'heavy-oil-barrel']
    n = len(sys.argv)
    search = sys.argv
    output = []
    # Opening JSON file

    f = open('recipes.json')

    print(search)
    # returns JSON object as a dictionary
    data = json.load(f)
    o = []
   
    # Iterating through the json list
    length = len(search) - 1
    for i in range(1, n):
        for recipe in data['recipes']:
            for x in recipe['ingredients']:
                if x['name'] == search[i]:
                    o.append(recipe['name'])
    for p in o:
        if o.count(p) == length:
            output.append(p)
    output_set = set(output)
    # Closing file
    f.close()
    print(output_set)

if __name__ == "__main__":
    main()
# 