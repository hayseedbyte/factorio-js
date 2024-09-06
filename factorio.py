import json
import sys

def main():
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