import json
import glob

json_file = {
    "fight_style": {
        "beastlord": {
            "classes" : {
                "death_knight" : {
                    "frost": {},
                    "unholy": {}
                },
                "demon_hunter": {
                    "havoc": {}
                },
                "druid" : {
                    "balance": {},
                    "feral": {}
                },
                "hunter": {
                    "beast_mastery": {},
                    "marksmanship": {},
                    "survival": {}
                },
                "mage":{
                    "arcane": {},
                    "fire": {},
                    "frost": {}
                },
                "monk": {
                    "windwalker": {}
                },
                "paladin": {
                    "retribution": {}
                },
                "priest": {
                    "shadow": {}
                },
                "rogue": {
                    "assassination": {},
                    "outlaw": {},
                    "subtlety": {}
                },
                "shaman":{
                    "elemental": {},
                    "enhancement": {}
                },
                "warlock": {
                    "affliction": {},
                    "demonology": {},
                    "destruction": {}
                },
                "warrior": {
                    "arms": {},
                    "fury": {}
                }
            }
        },
        "patchwerk": {
            "classes" : {
                "death_knight" : {
                    "frost": {},
                    "unholy": {}
                },
                "demon_hunter": {
                    "havoc": {}
                },
                "druid" : {
                    "balance": {},
                    "feral": {}
                },
                "hunter": {
                    "beast_mastery": {},
                    "marksmanship": {},
                    "survival": {}
                },
                "mage":{
                    "arcane": {},
                    "fire": {},
                    "frost": {}
                },
                "monk": {
                    "windwalker": {}
                },
                "paladin": {
                    "retribution": {}
                },
                "priest": {
                    "shadow": {}
                },
                "rogue": {
                    "assassination": {},
                    "outlaw": {},
                    "subtlety": {}
                },
                "shaman":{
                    "elemental": {},
                    "enhancement": {}
                },
                "warlock": {
                    "affliction": {},
                    "demonology": {},
                    "destruction": {}
                },
                "warrior": {
                    "arms": {},
                    "fury": {}
                }
            }
        }
    }
}

for file_name in glob.glob("*.json"):
    sim_details = file_name.split('_')
    if sim_details[0] == "death" or sim_details[0] == "demon":
        class_name = sim_details[0] + "_" + sim_details[1]
        spec_name = sim_details[2]
        fight_style = sim_details[3].split('.')[0]
    else:
        class_name = sim_details[0]
        spec_name = sim_details[1]
        fight_style = sim_details[2].split('.')[0]
        if spec_name == "beast":
            spec_name = sim_details[1] + "_" + sim_details[2]
            fight_style = sim_details[3].split('.')[0]
        
    print(class_name, spec_name, fight_style)
    file = open(file_name, 'r')
    file_data = json.loads(file.read())
    json_file["fight_style"][fight_style]["classes"][class_name][spec_name] = file_data["trinkets"]

with open('trinketdb.json', 'w') as f:
    json.dump(json_file, f)