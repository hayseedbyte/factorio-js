import json
import re
import sys
output = []
# Opening JSON file

f = open('recipes.json')
names = []
search = sys.argv
# search = sys.argv[1]
print(search)
# returns JSON object as a dictionary
data = json.load(f)
link = "https://wiki.factorio.com/images/"

# Iterating through the json list
for recipe in data['recipes']:
    names.append(recipe['name'])
    name = recipe['name']
    name = name.replace('-','_')
    name = name.capitalize()
    image = link + name + '.png'
    recipe['image'] = image
    for x in recipe['ingredients']:
        if x['name'] == search:
            output.append(recipe['name'])
    # print(i)

# Closing file
f.close()
j = open('recipes_link.json', 'w')
j.write(json.dumps(data))
j.close()
w = open('names.txt', 'w')
for name in names:
    w.write(name)
    w.write('\n')
w.close()

print(output)

link = "https://wiki.factorio.com/images/"
for o in output:
    o = o.replace('-','_')

    o = o.capitalize()
    image = link + o + '.png'


    print(image)
l = open('links.txt','w')
for n in names:
    n = n.replace('-','_')
    n = n.capitalize()
    image = link + n + '.png'
    l.write(image)
    l.write('\n')
l.close()
