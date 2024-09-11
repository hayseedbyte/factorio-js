import json
import re
import sys

ingredients = []
f = open('recipes_link2.json')
data = json.load(f)
recipes = data["recipes"]
for r in recipes:
    for i in r["ingredients"]:
        ingredients.append(i["name"])
ingredients = set(ingredients)

ing_dict = dict.fromkeys(ingredients, 0)
for i in ingredients:
    for r in recipes:
        for x in r["ingredients"]:
            if x["name"] == i:
                ing_dict[i] += 1
print(ing_dict)
# for i in sorted(ing_dict, key=ing_dict.get()):
#     print(i, ing_dict[i])
for recipe in recipes:
    recipe["count"] = 0
for key in ing_dict.keys():
    for recipe in recipes:
        if key == recipe["name"]:
            recipe["count"] =  ing_dict[key]

newlist = sorted(recipes, key=lambda d: d['count'], reverse=True)
print(newlist)
h = open('new.json', 'w')
h.write(json.dumps(newlist))
h.close

sorted = sorted(ing_dict.items(), key=lambda x: x[1], reverse=True)
# print(sorted)
# print(type(sorted[0][0]))
# print(sorted[0][0])
# print(sorted[1][0])
# print(sorted[2][0])
# print(sorted[2][1])

o = []
for s in sorted:
    o.append(s[0])
print("ooooo")
print(o)
f.close()