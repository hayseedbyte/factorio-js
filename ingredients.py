
import json
f = open('recipes_link2.json')
data = json.load(f)
recipes = data["recipes"]
recipes_a = []
ingredients = []
recipes_list = []
for recipe in recipes:
    # recipes_list.append(recipe["name"])
    print(recipe)
    for i in recipe["ingredients"]:
        ingredients.append(i["name"])
ingredients = set(ingredients)
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
# recipes_json = json.dumps(recipes)
# g = open('recipes_link2.json','w')
# g.write(recipes_json)
# g.close()
f.close()
print(ingredients)
    