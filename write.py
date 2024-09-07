import json

f = open('ingredients.json')
data = json.load(f)
w = open('input.txt', 'w')
for recipe in data['recipes']:
    print(recipe)
    name =  recipe['name']
    lower = recipe['name']
    name = name.replace('-',' ')
    name = name.title()
    image = recipe['image']
    w.write("<div class='item'>\n\t<label for='" + lower +  "'>" + name + "</label>\n\t<input type='checkbox' id='" + lower + "'><img class='item' src='" + image + "' id='" + lower + "'>\n</div>")
    w.write("\n")
w.close()

recipe