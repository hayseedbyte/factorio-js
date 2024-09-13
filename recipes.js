const recipes = [
    {
      "name": "steel-plate",
      "ingredients": [{ "name": "iron-plate", "qty": 5 }],
      "image": "https://wiki.factorio.com/images/Steel_plate.png",
      "count": 58
    },
    {
      "name": "electronic-circuit",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "copper-cable", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Electronic_circuit.png",
      "count": 50
    },
    {
      "name": "iron-gear-wheel",
      "ingredients": [{ "name": "iron-plate", "qty": 2 }],
      "image": "https://wiki.factorio.com/images/Iron_gear_wheel.png",
      "count": 42
    },
    {
      "name": "iron-plate",
      "ingredients": [{ "name": "iron-ore", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Iron_plate.png",
      "count": 41
    },
    {
      "name": "advanced-circuit",
      "ingredients": [
        { "name": "plastic-bar", "qty": 2 },
        { "name": "copper-cable", "qty": 4 },
        { "name": "electronic-circuit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Advanced_circuit.png",
      "count": 31
    },
    {
      "name": "copper-plate",
      "ingredients": [{ "name": "copper-ore", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Copper_plate.png",
      "count": 21
    },
    {
      "name": "processing-unit",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 20 },
        { "name": "advanced-circuit", "qty": 2 },
        { "name": "sulfuric-acid", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Processing_unit.png",
      "count": 18
    },
    {
      "name": "pipe",
      "ingredients": [{ "name": "iron-plate", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Pipe.png",
      "count": 15
    },
    {
      "name": "copper-cable",
      "ingredients": [{ "name": "copper-plate", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Copper_cable.png",
      "count": 11
    },
    {
      "name": "low-density-structure",
      "ingredients": [
        { "name": "copper-plate", "qty": 20 },
        { "name": "steel-plate", "qty": 2 },
        { "name": "plastic-bar", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Low_density_structure.png",
      "count": 10
    },
    {
      "name": "explosives",
      "ingredients": [
        { "name": "coal", "qty": 1 },
        { "name": "sulfur", "qty": 1 },
        { "name": "water", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Explosives.png",
      "count": 9
    },
    {
      "name": "water",
      "image": "https://wiki.factorio.com/images/Water.png",
      "ingredients": [],
      "count": 9
    },
    {
      "name": "empty-barrel",
      "ingredients": [{ "name": "steel-plate", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_barrel.png",
      "count": 8
    },
    {
      "name": "engine-unit",
      "ingredients": [
        { "name": "steel-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 },
        { "name": "pipe", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Engine_unit.png",
      "count": 8
    },
    {
      "name": "concrete",
      "ingredients": [
        { "name": "iron-ore", "qty": 1 },
        { "name": "stone-brick", "qty": 5 },
        { "name": "water", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Concrete.png",
      "count": 6
    },
    {
      "name": "iron-stick",
      "ingredients": [{ "name": "iron-plate", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Iron_stick.png",
      "count": 6
    },
    {
      "name": "coal",
      "image": "https://wiki.factorio.com/images/Coal.png",
      "ingredients": [],
      "count": 6
    },
    {
      "name": "battery",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "copper-plate", "qty": 1 },
        { "name": "sulfuric-acid", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Battery.png",
      "count": 5
    },
    {
      "name": "electric-engine-unit",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 2 },
        { "name": "engine-unit", "qty": 1 },
        { "name": "lubricant", "qty": 15 }
      ],
      "image": "https://wiki.factorio.com/images/Electric_engine_unit.png",
      "count": 5
    },
    {
      "name": "lubricant",
      "ingredients": [{ "name": "heavy-oil", "qty": 10 }],
      "image": "https://wiki.factorio.com/images/Lubricant.png",
      "count": 5
    },
    {
      "name": "radar",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Radar.png",
      "count": 5
    },
    {
      "name": "steel-chest",
      "ingredients": [{ "name": "steel-plate", "qty": 8 }],
      "image": "https://wiki.factorio.com/images/Steel_chest.png",
      "count": 5
    },
    {
      "name": "stone-brick",
      "ingredients": [{ "name": "stone", "qty": 2 }],
      "image": "https://wiki.factorio.com/images/Stone_brick.png",
      "count": 5
    },
    {
      "name": "transport-belt",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Transport_belt.png",
      "count": 5
    },
    {
      "name": "heavy-oil",
      "image": "https://wiki.factorio.com/images/Heavy_oil.png",
      "ingredients": [],
      "count": 5
    },
    {
      "name": "uranium-238",
      "image": "https://wiki.factorio.com/images/Uranium_238.png",
      "ingredients": [],
      "count": 5
    },
    {
      "name": "plastic-bar",
      "ingredients": [
        { "name": "coal", "qty": 1 },
        { "name": "petroleum-gas", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Plastic_bar.png",
      "count": 4
    },
    {
      "name": "rocket-control-unit",
      "ingredients": [
        { "name": "processing-unit", "qty": 1 },
        { "name": "speed-module", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket_control_unit.png",
      "count": 4
    },
    {
      "name": "speed-module",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Speed_module.png",
      "count": 4
    },
    {
      "name": "petroleum-gas",
      "image": "https://wiki.factorio.com/images/Petroleum_gas.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "stone",
      "image": "https://wiki.factorio.com/images/Stone.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "light-oil",
      "image": "https://wiki.factorio.com/images/Light_oil.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "uranium-235",
      "image": "https://wiki.factorio.com/images/Uranium_235.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "wood",
      "image": "https://wiki.factorio.com/images/Wood.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "crude-oil",
      "image": "https://wiki.factorio.com/images/Crude_oil.png",
      "ingredients": [],
      "count": 4
    },
    {
      "name": "flying-robot-frame",
      "ingredients": [
        { "name": "steel-plate", "qty": 1 },
        { "name": "battery", "qty": 2 },
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "electric-engine-unit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Flying_robot_frame.png",
      "count": 3
    },
    {
      "name": "grenade",
      "ingredients": [
        { "name": "coal", "qty": 10 },
        { "name": "iron-plate", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Grenade.png",
      "count": 3
    },
    {
      "name": "inserter",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Inserter.png",
      "count": 3
    },
    {
      "name": "piercing-rounds-magazine",
      "ingredients": [
        { "name": "copper-plate", "qty": 5 },
        { "name": "steel-plate", "qty": 1 },
        { "name": "firearm-magazine", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Piercing_rounds_magazine.png",
      "count": 3
    },
    {
      "name": "rocket-fuel",
      "ingredients": [
        { "name": "solid-fuel", "qty": 10 },
        { "name": "light-oil", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket_fuel.png",
      "count": 3
    },
    {
      "name": "sulfur",
      "ingredients": [
        { "name": "water", "qty": 30 },
        { "name": "petroleum-gas", "qty": 30 }
      ],
      "image": "https://wiki.factorio.com/images/Sulfur.png",
      "count": 3
    },
    {
      "name": "sulfuric-acid",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "sulfur", "qty": 5 },
        { "name": "water", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Sulfuric_acid.png",
      "count": 3
    },
    {
      "name": "explosive-cannon-shell",
      "ingredients": [
        { "name": "steel-plate", "qty": 2 },
        { "name": "plastic-bar", "qty": 2 },
        { "name": "explosives", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Explosive_cannon_shell.png",
      "count": 2
    },
    {
      "name": "fast-inserter",
      "ingredients": [
        { "name": "iron-plate", "qty": 2 },
        { "name": "electronic-circuit", "qty": 2 },
        { "name": "inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Fast_inserter.png",
      "count": 2
    },
    {
      "name": "laser-turret",
      "ingredients": [
        { "name": "steel-plate", "qty": 20 },
        { "name": "battery", "qty": 12 },
        { "name": "electronic-circuit", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Laser_turret.png",
      "count": 2
    },
    {
      "name": "productivity-module",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Productivity_module.png",
      "count": 2
    },
    {
      "name": "speed-module-2",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 5 },
        { "name": "processing-unit", "qty": 5 },
        { "name": "speed-module", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Speed_module_2.png",
      "count": 2
    },
    {
      "name": "stone-furnace",
      "ingredients": [{ "name": "stone", "qty": 5 }],
      "image": "https://wiki.factorio.com/images/Stone_furnace.png",
      "count": 2
    },
    {
      "name": "wall",
      "ingredients": [{ "name": "stone-brick", "qty": 5 }],
      "image": "https://wiki.factorio.com/images/Stone_wall.png",
      "count": 2
    },
    {
      "name": "iron-ore",
      "image": "https://wiki.factorio.com/images/Iron_ore.png",
      "ingredients": [],
      "count": 2
    },
    {
      "name": "accumulator",
      "ingredients": [
        { "name": "iron-plate", "qty": 2 },
        { "name": "battery", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Accumulator.png",
      "count": 1
    },
    {
      "name": "assembling-machine-1",
      "ingredients": [
        { "name": "iron-plate", "qty": 9 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Assembling_machine_1.png",
      "count": 1
    },
    {
      "name": "assembling-machine-2",
      "ingredients": [
        { "name": "steel-plate", "qty": 2 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "assembling-machine-1", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Assembling_machine_2.png",
      "count": 1
    },
    {
      "name": "personal-battery",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "battery", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Personal_battery.png",
      "count": 1
    },
    {
      "name": "cannon-shell",
      "ingredients": [
        { "name": "steel-plate", "qty": 2 },
        { "name": "plastic-bar", "qty": 2 },
        { "name": "explosives", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Cannon_shell.png",
      "count": 1
    },
    {
      "name": "defender-capsule",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 3 },
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "piercing-rounds-magazine", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Defender_capsule.png",
      "count": 1
    },
    {
      "name": "distractor-capsule",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 3 },
        { "name": "defender-capsule", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Distractor_capsule.png",
      "count": 1
    },
    {
      "name": "electric-furnace",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "advanced-circuit", "qty": 5 },
        { "name": "stone-brick", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Electric_furnace.png",
      "count": 1
    },
    {
      "name": "energy-shield",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Energy_shield.png",
      "count": 1
    },
    {
      "name": "exoskeleton",
      "ingredients": [
        { "name": "steel-plate", "qty": 20 },
        { "name": "processing-unit", "qty": 10 },
        { "name": "electric-engine-unit", "qty": 30 }
      ],
      "image": "https://wiki.factorio.com/images/Exoskeleton.png",
      "count": 1
    },
    {
      "name": "fast-splitter",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "electronic-circuit", "qty": 10 },
        { "name": "splitter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Fast_splitter.png",
      "count": 1
    },
    {
      "name": "fast-transport-belt",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "transport-belt", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Fast_transport_belt.png",
      "count": 1
    },
    {
      "name": "fast-underground-belt",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 40 },
        { "name": "underground-belt", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Fast_underground_belt.png",
      "count": 1
    },
    {
      "name": "firearm-magazine",
      "ingredients": [{ "name": "iron-plate", "qty": 4 }],
      "image": "https://wiki.factorio.com/images/Firearm_magazine.png",
      "count": 1
    },
    {
      "name": "fusion-reactor",
      "ingredients": [
        { "name": "processing-unit", "qty": 200 },
        { "name": "low-density-structure", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Portable_fusion_reactor.png",
      "count": 1
    },
    {
      "name": "personal-roboport",
      "ingredients": [
        { "name": "steel-plate", "qty": 20 },
        { "name": "battery", "qty": 45 },
        { "name": "iron-gear-wheel", "qty": 40 },
        { "name": "advanced-circuit", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Personal_roboport.png",
      "count": 1
    },
    {
      "name": "productivity-module-2",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 5 },
        { "name": "processing-unit", "qty": 5 },
        { "name": "productivity-module", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Productivity_module_2.png",
      "count": 1
    },
    {
      "name": "rail",
      "ingredients": [
        { "name": "stone", "qty": 1 },
        { "name": "steel-plate", "qty": 1 },
        { "name": "iron-stick", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Straight_rail.png",
      "count": 1
    },
    {
      "name": "refined-concrete",
      "ingredients": [
        { "name": "steel-plate", "qty": 1 },
        { "name": "iron-stick", "qty": 8 },
        { "name": "concrete", "qty": 20 },
        { "name": "water", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Refined_concrete.png",
      "count": 1
    },
    {
      "name": "rocket",
      "ingredients": [
        { "name": "iron-plate", "qty": 2 },
        { "name": "explosives", "qty": 1 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket.png",
      "count": 1
    },
    {
      "name": "rocket-launcher",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket_launcher.png",
      "count": 1
    },
    {
      "name": "shotgun-shell",
      "ingredients": [
        { "name": "iron-plate", "qty": 2 },
        { "name": "copper-plate", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Shotgun_shells.png",
      "count": 1
    },
    {
      "name": "solar-panel",
      "ingredients": [
        { "name": "copper-plate", "qty": 5 },
        { "name": "steel-plate", "qty": 5 },
        { "name": "electronic-circuit", "qty": 15 }
      ],
      "image": "https://wiki.factorio.com/images/Solar_panel.png",
      "count": 1
    },
    {
      "name": "splitter",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "transport-belt", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Splitter.png",
      "count": 1
    },
    {
      "name": "stack-inserter",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 15 },
        { "name": "electronic-circuit", "qty": 15 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "fast-inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Stack_inserter.png",
      "count": 1
    },
    {
      "name": "storage-tank",
      "ingredients": [
        { "name": "iron-plate", "qty": 20 },
        { "name": "steel-plate", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Storage_tank.png",
      "count": 1
    },
    {
      "name": "underground-belt",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "transport-belt", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Underground_belt.png",
      "count": 1
    },
    {
      "name": "used-up-uranium-fuel-cell",
      "image": "https://wiki.factorio.com/images/Used_up_uranium_fuel_cell.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "solid-fuel",
      "image": "https://wiki.factorio.com/images/Solid_fuel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "raw-fish",
      "image": "https://wiki.factorio.com/images/Raw_fish.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "crude-oil-barrel",
      "image": "https://wiki.factorio.com/images/Crude_oil_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "light-oil-barrel",
      "image": "https://wiki.factorio.com/images/Light_oil_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "water-barrel",
      "image": "https://wiki.factorio.com/images/Water_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "effeciency-module-2",
      "image": "https://wiki.factorio.com/images/Effeciency_module_2.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "petroleum-gas-barrel",
      "image": "https://wiki.factorio.com/images/Petroleum_gas_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "effeciency-module-3",
      "image": "https://wiki.factorio.com/images/Effeciency_module_3.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "steam",
      "image": "https://wiki.factorio.com/images/Steam.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "sulfuric-acid-barrel",
      "image": "https://wiki.factorio.com/images/Sulfuric_acid_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "heavy-oil-barrel",
      "image": "https://wiki.factorio.com/images/Heavy_oil_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "uranium-ore",
      "image": "https://wiki.factorio.com/images/Uranium_ore.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "lubricant-barrel",
      "image": "https://wiki.factorio.com/images/Lubricant_barrel.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "copper-ore",
      "image": "https://wiki.factorio.com/images/Copper_ore.png",
      "ingredients": [],
      "count": 1
    },
    {
      "name": "advanced-oil-processing",
      "ingredients": [
        { "name": "water", "qty": 50 },
        { "name": "crude-oil", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Advanced_oil_processing.png",
      "count": 0
    },
    {
      "name": "arithmetic-combinator",
      "ingredients": [
        { "name": "copper-cable", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Arithmetic_combinator.png",
      "count": 0
    },
    {
      "name": "artillery-shell",
      "ingredients": [
        { "name": "explosives", "qty": 8 },
        { "name": "explosive-cannon-shell", "qty": 4 },
        { "name": "radar", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Artillery_shell.png",
      "count": 0
    },
    {
      "name": "artillery-targeting-remote",
      "ingredients": [
        { "name": "processing-unit", "qty": 1 },
        { "name": "radar", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Artillery_targeting_remote.png",
      "count": 0
    },
    {
      "name": "artillery-turret",
      "ingredients": [
        { "name": "steel-plate", "qty": 60 },
        { "name": "iron-gear-wheel", "qty": 40 },
        { "name": "advanced-circuit", "qty": 20 },
        { "name": "concrete", "qty": 60 }
      ],
      "image": "https://wiki.factorio.com/images/Artillery_turret.png",
      "count": 0
    },
    {
      "name": "artillery-wagon",
      "ingredients": [
        { "name": "steel-plate", "qty": 40 },
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "advanced-circuit", "qty": 20 },
        { "name": "engine-unit", "qty": 64 },
        { "name": "pipe", "qty": 16 }
      ],
      "image": "https://wiki.factorio.com/images/Artillery_wagon.png",
      "count": 0
    },
    {
      "name": "assembling-machine-3",
      "ingredients": [
        { "name": "assembling-machine-2", "qty": 2 },
        { "name": "speed-module", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Assembling_machine_3.png",
      "count": 0
    },
    {
      "name": "atomic-bomb",
      "ingredients": [
        { "name": "explosives", "qty": 10 },
        { "name": "rocket-control-unit", "qty": 10 },
        { "name": "uranium-235", "qty": 30 }
      ],
      "image": "https://wiki.factorio.com/images/Atomic_bomb.png",
      "count": 0
    },
    {
      "name": "automation-science-pack",
      "ingredients": [
        { "name": "copper-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Automation_science_pack.png",
      "count": 0
    },
    {
      "name": "basic-oil-processing",
      "ingredients": [{ "name": "crude-oil", "qty": 100 }],
      "image": "https://wiki.factorio.com/images/Basic_oil_processing.png",
      "count": 0
    },
    {
      "name": "personal-battery-mk2",
      "ingredients": [
        { "name": "processing-unit", "qty": 15 },
        { "name": "low-density-structure", "qty": 5 },
        { "name": "personal-battery", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Personal_battery_mk2.png",
      "count": 0
    },
    {
      "name": "beacon",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "copper-cable", "qty": 10 },
        { "name": "electronic-circuit", "qty": 20 },
        { "name": "advanced-circuit", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Beacon.png",
      "count": 0
    },
    {
      "name": "belt-immunity",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Belt_immunity.png",
      "count": 0
    },
    {
      "name": "big-electric-pole",
      "ingredients": [
        { "name": "copper-plate", "qty": 5 },
        { "name": "steel-plate", "qty": 5 },
        { "name": "iron-stick", "qty": 8 }
      ],
      "image": "https://wiki.factorio.com/images/Big_electric_pole.png",
      "count": 0
    },
    {
      "name": "boiler",
      "ingredients": [
        { "name": "pipe", "qty": 4 },
        { "name": "stone-furnace", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Boiler.png",
      "count": 0
    },
    {
      "name": "burner-inserter",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Burner_inserter.png",
      "count": 0
    },
    {
      "name": "burner-mining-drill",
      "ingredients": [
        { "name": "iron-plate", "qty": 3 },
        { "name": "iron-gear-wheel", "qty": 3 },
        { "name": "stone-furnace", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Burner_mining_drill.png",
      "count": 0
    },
    {
      "name": "car",
      "ingredients": [
        { "name": "iron-plate", "qty": 20 },
        { "name": "steel-plate", "qty": 5 },
        { "name": "engine-unit", "qty": 8 }
      ],
      "image": "https://wiki.factorio.com/images/Car.png",
      "count": 0
    },
    {
      "name": "cargo-wagon",
      "ingredients": [
        { "name": "iron-plate", "qty": 20 },
        { "name": "steel-plate", "qty": 20 },
        { "name": "iron-gear-wheel", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Cargo_wagon.png",
      "count": 0
    },
    {
      "name": "centrifuge",
      "ingredients": [
        { "name": "steel-plate", "qty": 50 },
        { "name": "iron-gear-wheel", "qty": 100 },
        { "name": "advanced-circuit", "qty": 100 },
        { "name": "concrete", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Centrifuge.png",
      "count": 0
    },
    {
      "name": "chemical-plant",
      "ingredients": [
        { "name": "steel-plate", "qty": 5 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "pipe", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Chemical_plant.png",
      "count": 0
    },
    {
      "name": "chemical-science-pack",
      "ingredients": [
        { "name": "sulfur", "qty": 1 },
        { "name": "advanced-circuit", "qty": 3 },
        { "name": "engine-unit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Chemical_science_pack.png",
      "count": 0
    },
    {
      "name": "cliff-explosives",
      "ingredients": [
        { "name": "explosives", "qty": 10 },
        { "name": "empty-barrel", "qty": 1 },
        { "name": "grenade", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Cliff_explosives.png",
      "count": 0
    },
    {
      "name": "cluster-grenade",
      "ingredients": [
        { "name": "steel-plate", "qty": 5 },
        { "name": "explosives", "qty": 5 },
        { "name": "grenade", "qty": 7 }
      ],
      "image": "https://wiki.factorio.com/images/Cluster_grenade.png",
      "count": 0
    },
    {
      "name": "coal-liquefaction",
      "ingredients": [
        { "name": "coal", "qty": 10 },
        { "name": "heavy-oil", "qty": 25 },
        { "name": "steam", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Coal_liquefaction.png",
      "count": 0
    },
    {
      "name": "combat-shotgun",
      "ingredients": [
        { "name": "wood", "qty": 10 },
        { "name": "copper-plate", "qty": 10 },
        { "name": "steel-plate", "qty": 15 },
        { "name": "iron-gear-wheel", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Combat_shotgun.png",
      "count": 0
    },
    {
      "name": "constant-combinator",
      "ingredients": [
        { "name": "copper-cable", "qty": 5 },
        { "name": "electronic-circuit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Constant_combinator.png",
      "count": 0
    },
    {
      "name": "construction-robot",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 2 },
        { "name": "flying-robot-frame", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Construction_robot.png",
      "count": 0
    },
    {
      "name": "decider-combinator",
      "ingredients": [
        { "name": "copper-cable", "qty": 5 },
        { "name": "electronic-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Decider_combinator.png",
      "count": 0
    },
    {
      "name": "destroyer-capsule",
      "ingredients": [
        { "name": "speed-module", "qty": 1 },
        { "name": "distractor-capsule", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Destroyer_capsule.png",
      "count": 0
    },
    {
      "name": "discharge-defense",
      "ingredients": [
        { "name": "steel-plate", "qty": 20 },
        { "name": "processing-unit", "qty": 5 },
        { "name": "laser-turret", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Discharge_defense.png",
      "count": 0
    },
    {
      "name": "discharge-defense-remote",
      "ingredients": [{ "name": "electronic-circuit", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Discharge_defense_remote.png",
      "count": 0
    },
    {
      "name": "electric-mining-drill",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "iron-gear-wheel", "qty": 5 },
        { "name": "electronic-circuit", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Electric_mining_drill.png",
      "count": 0
    },
    {
      "name": "empty-crude-oil-barrel",
      "ingredients": [{ "name": "crude-oil-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_crude_oil_barrel.png",
      "count": 0
    },
    {
      "name": "empty-heavy-oil-barrel",
      "ingredients": [{ "name": "heavy-oil-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_heavy_oil_barrel.png",
      "count": 0
    },
    {
      "name": "empty-light-oil-barrel",
      "ingredients": [{ "name": "light-oil-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_light_oil_barrel.png",
      "count": 0
    },
    {
      "name": "empty-lubricant-barrel",
      "ingredients": [{ "name": "lubricant-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_lubricant_barrel.png",
      "count": 0
    },
    {
      "name": "empty-petroleum-gas-barrel",
      "ingredients": [{ "name": "petroleum-gas-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_petroleum_gas_barrel.png",
      "count": 0
    },
    {
      "name": "empty-sulfuric-acid-barrel",
      "ingredients": [{ "name": "sulfuric-acid-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_sulfuric_acid_barrel.png",
      "count": 0
    },
    {
      "name": "empty-water-barrel",
      "ingredients": [{ "name": "water-barrel", "qty": 1 }],
      "image": "https://wiki.factorio.com/images/Empty_water_barrel.png",
      "count": 0
    },
    {
      "name": "energy-shield-mk2",
      "ingredients": [
        { "name": "processing-unit", "qty": 5 },
        { "name": "low-density-structure", "qty": 5 },
        { "name": "energy-shield", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Energy_shield_mk2.png",
      "count": 0
    },
    {
      "name": "explosive-rocket",
      "ingredients": [
        { "name": "explosives", "qty": 2 },
        { "name": "rocket", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Explosive_rocket.png",
      "count": 0
    },
    {
      "name": "explosive-uranium-cannon-shell",
      "ingredients": [
        { "name": "uranium-238", "qty": 1 },
        { "name": "explosive-cannon-shell", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Explosive_uranium_cannon_shell.png",
      "count": 0
    },
    {
      "name": "express-splitter",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "advanced-circuit", "qty": 10 },
        { "name": "fast-splitter", "qty": 1 },
        { "name": "lubricant", "qty": 80 }
      ],
      "image": "https://wiki.factorio.com/images/Express_splitter.png",
      "count": 0
    },
    {
      "name": "express-transport-belt",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "fast-transport-belt", "qty": 1 },
        { "name": "lubricant", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Express_transport_belt.png",
      "count": 0
    },
    {
      "name": "express-underground-belt",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 80 },
        { "name": "fast-underground-belt", "qty": 2 },
        { "name": "lubricant", "qty": 40 }
      ],
      "image": "https://wiki.factorio.com/images/Express_underground_belt.png",
      "count": 0
    },
    {
      "name": "fill-crude-oil-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "crude-oil", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_crude_oil_barrel.png",
      "count": 0
    },
    {
      "name": "fill-heavy-oil-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "heavy-oil", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_heavy_oil_barrel.png",
      "count": 0
    },
    {
      "name": "fill-light-oil-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "light-oil", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_light_oil_barrel.png",
      "count": 0
    },
    {
      "name": "fill-lubricant-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "lubricant", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_lubricant_barrel.png",
      "count": 0
    },
    {
      "name": "fill-petroleum-gas-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "petroleum-gas", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_petroleum_gas_barrel.png",
      "count": 0
    },
    {
      "name": "fill-sulfuric-acid-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "sulfuric-acid", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_sulfuric_acid_barrel.png",
      "count": 0
    },
    {
      "name": "fill-water-barrel",
      "ingredients": [
        { "name": "empty-barrel", "qty": 1 },
        { "name": "water", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Fill_water_barrel.png",
      "count": 0
    },
    {
      "name": "filter-inserter",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 4 },
        { "name": "fast-inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Filter_inserter.png",
      "count": 0
    },
    {
      "name": "flamethrower",
      "ingredients": [
        { "name": "steel-plate", "qty": 5 },
        { "name": "iron-gear-wheel", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Flamethrower.png",
      "count": 0
    },
    {
      "name": "flamethrower-ammo",
      "ingredients": [
        { "name": "steel-plate", "qty": 5 },
        { "name": "crude-oil", "qty": 100 }
      ],
      "image": "https://wiki.factorio.com/images/Flamethrower_ammo.png",
      "count": 0
    },
    {
      "name": "flamethrower-turret",
      "ingredients": [
        { "name": "steel-plate", "qty": 30 },
        { "name": "iron-gear-wheel", "qty": 15 },
        { "name": "engine-unit", "qty": 5 },
        { "name": "pipe", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Flamethrower_turret.png",
      "count": 0
    },
    {
      "name": "fluid-wagon",
      "ingredients": [
        { "name": "steel-plate", "qty": 16 },
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "storage-tank", "qty": 1 },
        { "name": "pipe", "qty": 8 }
      ],
      "image": "https://wiki.factorio.com/images/Fluid_wagon.png",
      "count": 0
    },
    {
      "name": "gate",
      "ingredients": [
        { "name": "steel-plate", "qty": 2 },
        { "name": "electronic-circuit", "qty": 2 },
        { "name": "wall", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Gate.png",
      "count": 0
    },
    {
      "name": "green-wire",
      "ingredients": [
        { "name": "copper-cable", "qty": 1 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Green_wire.png",
      "count": 0
    },
    {
      "name": "gun-turret",
      "ingredients": [
        { "name": "iron-plate", "qty": 20 },
        { "name": "copper-plate", "qty": 10 },
        { "name": "iron-gear-wheel", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Gun_turret.png",
      "count": 0
    },
    {
      "name": "hazard-concrete",
      "ingredients": [{ "name": "concrete", "qty": 10 }],
      "image": "https://wiki.factorio.com/images/Hazard_concrete.png",
      "count": 0
    },
    {
      "name": "heat-exchanger",
      "ingredients": [
        { "name": "copper-plate", "qty": 100 },
        { "name": "steel-plate", "qty": 10 },
        { "name": "pipe", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Heat_exchanger.png",
      "count": 0
    },
    {
      "name": "heat-pipe",
      "ingredients": [
        { "name": "copper-plate", "qty": 20 },
        { "name": "steel-plate", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Heat_pipe.png",
      "count": 0
    },
    {
      "name": "heavy-armor",
      "ingredients": [
        { "name": "copper-plate", "qty": 100 },
        { "name": "steel-plate", "qty": 50 }
      ],
      "image": "https://wiki.factorio.com/images/Heavy_armor.png",
      "count": 0
    },
    {
      "name": "heavy-oil-cracking",
      "ingredients": [
        { "name": "water", "qty": 30 },
        { "name": "heavy-oil", "qty": 40 }
      ],
      "image": "https://wiki.factorio.com/images/Heavy_oil_cracking.png",
      "count": 0
    },
    {
      "name": "iron-chest",
      "ingredients": [{ "name": "iron-plate", "qty": 8 }],
      "image": "https://wiki.factorio.com/images/Iron_chest.png",
      "count": 0
    },
    {
      "name": "kovarex-enrichment-process",
      "ingredients": [
        { "name": "uranium-235", "qty": 40 },
        { "name": "uranium-238", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Kovarex_enrichment_process.png",
      "count": 0
    },
    {
      "name": "lab",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "electronic-circuit", "qty": 10 },
        { "name": "transport-belt", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Lab.png",
      "count": 0
    },
    {
      "name": "land-mine",
      "ingredients": [
        { "name": "steel-plate", "qty": 1 },
        { "name": "explosives", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Land_mine.png",
      "count": 0
    },
    {
      "name": "landfill",
      "ingredients": [{ "name": "stone", "qty": 20 }],
      "image": "https://wiki.factorio.com/images/Landfill.png",
      "count": 0
    },
    {
      "name": "light-armor",
      "ingredients": [{ "name": "iron-plate", "qty": 40 }],
      "image": "https://wiki.factorio.com/images/Light_armor.png",
      "count": 0
    },
    {
      "name": "light-oil-cracking",
      "ingredients": [
        { "name": "water", "qty": 30 },
        { "name": "light-oil", "qty": 30 }
      ],
      "image": "https://wiki.factorio.com/images/Light_oil_cracking.png",
      "count": 0
    },
    {
      "name": "locomotive",
      "ingredients": [
        { "name": "steel-plate", "qty": 30 },
        { "name": "electronic-circuit", "qty": 10 },
        { "name": "engine-unit", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Locomotive.png",
      "count": 0
    },
    {
      "name": "active-provider-chest",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "steel-chest", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Active_provider_chest.png",
      "count": 0
    },
    {
      "name": "buffer-chest",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "steel-chest", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Buffer_chest.png",
      "count": 0
    },
    {
      "name": "passive-provider-chest",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "steel-chest", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Passive_provider_chest.png",
      "count": 0
    },
    {
      "name": "requester-chest",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "steel-chest", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Requester_chest.png",
      "count": 0
    },
    {
      "name": "storage-chest",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 3 },
        { "name": "advanced-circuit", "qty": 1 },
        { "name": "steel-chest", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Storage_chest.png",
      "count": 0
    },
    {
      "name": "logistic-robot",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 2 },
        { "name": "flying-robot-frame", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Logistic_robot.png",
      "count": 0
    },
    {
      "name": "logistic-science-pack",
      "ingredients": [
        { "name": "transport-belt", "qty": 1 },
        { "name": "inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Logistic_science_pack.png",
      "count": 0
    },
    {
      "name": "long-handed-inserter",
      "ingredients": [
        { "name": "iron-plate", "qty": 1 },
        { "name": "iron-gear-wheel", "qty": 1 },
        { "name": "inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Long-handed_inserter.png",
      "count": 0
    },
    {
      "name": "medium-electric-pole",
      "ingredients": [
        { "name": "copper-plate", "qty": 2 },
        { "name": "steel-plate", "qty": 2 },
        { "name": "iron-stick", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Medium_electric_pole.png",
      "count": 0
    },
    {
      "name": "military-science-pack",
      "ingredients": [
        { "name": "piercing-rounds-magazine", "qty": 1 },
        { "name": "grenade", "qty": 1 },
        { "name": "wall", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Military_science_pack.png",
      "count": 0
    },
    {
      "name": "modular-armor",
      "ingredients": [
        { "name": "steel-plate", "qty": 50 },
        { "name": "advanced-circuit", "qty": 30 }
      ],
      "image": "https://wiki.factorio.com/images/Modular_armor.png",
      "count": 0
    },
    {
      "name": "night-vision",
      "ingredients": [
        { "name": "steel-plate", "qty": 10 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Nightvision.png",
      "count": 0
    },
    {
      "name": "nuclear-fuel",
      "ingredients": [
        { "name": "rocket-fuel", "qty": 1 },
        { "name": "uranium-235", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Nuclear_fuel.png",
      "count": 0
    },
    {
      "name": "nuclear-fuel-reprocessing",
      "ingredients": [{ "name": "used-up-uranium-fuel-cell", "qty": 5 }],
      "image": "https://wiki.factorio.com/images/Nuclear_fuel_reprocessing.png",
      "count": 0
    },
    {
      "name": "nuclear-reactor",
      "ingredients": [
        { "name": "copper-plate", "qty": 500 },
        { "name": "steel-plate", "qty": 500 },
        { "name": "advanced-circuit", "qty": 500 },
        { "name": "concrete", "qty": 500 }
      ],
      "image": "https://wiki.factorio.com/images/Nuclear_reactor.png",
      "count": 0
    },
    {
      "name": "offshore-pump",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 1 },
        { "name": "electronic-circuit", "qty": 2 },
        { "name": "pipe", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Offshore_pump.png",
      "count": 0
    },
    {
      "name": "oil-refinery",
      "ingredients": [
        { "name": "steel-plate", "qty": 15 },
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "electronic-circuit", "qty": 10 },
        { "name": "pipe", "qty": 10 },
        { "name": "stone-brick", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Oil_refinery.png",
      "count": 0
    },
    {
      "name": "personal-laser-defense",
      "ingredients": [
        { "name": "processing-unit", "qty": 20 },
        { "name": "low-density-structure", "qty": 5 },
        { "name": "laser-turret", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Personal_laser_defense.png",
      "count": 0
    },
    {
      "name": "personal-roboport-mk2",
      "ingredients": [
        { "name": "processing-unit", "qty": 100 },
        { "name": "low-density-structure", "qty": 20 },
        { "name": "personal-roboport", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Personal_roboport_mk2.png",
      "count": 0
    },
    {
      "name": "piercing-shotgun-shell",
      "ingredients": [
        { "name": "copper-plate", "qty": 5 },
        { "name": "steel-plate", "qty": 2 },
        { "name": "shotgun-shell", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Piercing_shotgun_shells.png",
      "count": 0
    },
    {
      "name": "pipe-to-ground",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "pipe", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Pipe_to_ground.png",
      "count": 0
    },
    {
      "name": "pistol",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "copper-plate", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Pistol.png",
      "count": 0
    },
    {
      "name": "poison-capsule",
      "ingredients": [
        { "name": "coal", "qty": 10 },
        { "name": "steel-plate", "qty": 3 },
        { "name": "electronic-circuit", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Poison_capsule.png",
      "count": 0
    },
    {
      "name": "power-armor",
      "ingredients": [
        { "name": "steel-plate", "qty": 40 },
        { "name": "processing-unit", "qty": 40 },
        { "name": "electric-engine-unit", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Power_armor.png",
      "count": 0
    },
    {
      "name": "power-armor-mk2",
      "ingredients": [
        { "name": "processing-unit", "qty": 60 },
        { "name": "electric-engine-unit", "qty": 40 },
        { "name": "low-density-structure", "qty": 30 },
        { "name": "speed-module-2", "qty": 25 },
        { "name": "effeciency-module-2", "qty": 25 }
      ],
      "image": "https://wiki.factorio.com/images/Power_armor_mk2.png",
      "count": 0
    },
    {
      "name": "power-switch",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "copper-cable", "qty": 5 },
        { "name": "electronic-circuit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Power_switch.png",
      "count": 0
    },
    {
      "name": "production-science-pack",
      "ingredients": [
        { "name": "rail", "qty": 30 },
        { "name": "electric-furnace", "qty": 1 },
        { "name": "productivity-module", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Production_science_pack.png",
      "count": 0
    },
    {
      "name": "productivity-module-3",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 5 },
        { "name": "processing-unit", "qty": 5 },
        { "name": "productivity-module-2", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Productivity_module_3.png",
      "count": 0
    },
    {
      "name": "programmable-speaker",
      "ingredients": [
        { "name": "iron-plate", "qty": 3 },
        { "name": "copper-cable", "qty": 5 },
        { "name": "iron-stick", "qty": 4 },
        { "name": "electronic-circuit", "qty": 4 }
      ],
      "image": "https://wiki.factorio.com/images/Programmable_speaker.png",
      "count": 0
    },
    {
      "name": "pump",
      "ingredients": [
        { "name": "steel-plate", "qty": 1 },
        { "name": "engine-unit", "qty": 1 },
        { "name": "pipe", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Pump.png",
      "count": 0
    },
    {
      "name": "pumpjack",
      "ingredients": [
        { "name": "steel-plate", "qty": 5 },
        { "name": "iron-gear-wheel", "qty": 10 },
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "pipe", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Pumpjack.png",
      "count": 0
    },
    {
      "name": "rail-chain-signal",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Rail_chain_signal.png",
      "count": 0
    },
    {
      "name": "rail-signal",
      "ingredients": [
        { "name": "iron-plate", "qty": 5 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Rail_signal.png",
      "count": 0
    },
    {
      "name": "red-wire",
      "ingredients": [
        { "name": "copper-cable", "qty": 1 },
        { "name": "electronic-circuit", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Red_wire.png",
      "count": 0
    },
    {
      "name": "refined-hazard-concrete",
      "ingredients": [{ "name": "refined-concrete", "qty": 10 }],
      "image": "https://wiki.factorio.com/images/Refined_hazard_concrete.png",
      "count": 0
    },
    {
      "name": "repair-pack",
      "ingredients": [
        { "name": "iron-gear-wheel", "qty": 2 },
        { "name": "electronic-circuit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Repair_pack.png",
      "count": 0
    },
    {
      "name": "roboport",
      "ingredients": [
        { "name": "steel-plate", "qty": 45 },
        { "name": "iron-gear-wheel", "qty": 45 },
        { "name": "advanced-circuit", "qty": 45 }
      ],
      "image": "https://wiki.factorio.com/images/Roboport.png",
      "count": 0
    },
    {
      "name": "rocket-part",
      "ingredients": [
        { "name": "rocket-control-unit", "qty": 10 },
        { "name": "low-density-structure", "qty": 10 },
        { "name": "rocket-fuel", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket_part.png",
      "count": 0
    },
    {
      "name": "rocket-silo",
      "ingredients": [
        { "name": "steel-plate", "qty": 1000 },
        { "name": "processing-unit", "qty": 200 },
        { "name": "electric-engine-unit", "qty": 200 },
        { "name": "pipe", "qty": 100 },
        { "name": "concrete", "qty": 1000 }
      ],
      "image": "https://wiki.factorio.com/images/Rocket_silo.png",
      "count": 0
    },
    {
      "name": "satellite",
      "ingredients": [
        { "name": "processing-unit", "qty": 100 },
        { "name": "low-density-structure", "qty": 100 },
        { "name": "rocket-fuel", "qty": 50 },
        { "name": "solar-panel", "qty": 100 },
        { "name": "accumulator", "qty": 100 },
        { "name": "radar", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Satellite.png",
      "count": 0
    },
    {
      "name": "shotgun",
      "ingredients": [
        { "name": "wood", "qty": 5 },
        { "name": "iron-plate", "qty": 15 },
        { "name": "copper-plate", "qty": 10 },
        { "name": "iron-gear-wheel", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Shotgun.png",
      "count": 0
    },
    {
      "name": "slowdown-capsule",
      "ingredients": [
        { "name": "coal", "qty": 5 },
        { "name": "steel-plate", "qty": 2 },
        { "name": "electronic-circuit", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Slowdown_capsule.png",
      "count": 0
    },
    {
      "name": "small-electric-pole",
      "ingredients": [
        { "name": "wood", "qty": 1 },
        { "name": "copper-cable", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Small_electric_pole.png",
      "count": 0
    },
    {
      "name": "solid-fuel-from-heavy-oil",
      "ingredients": [{ "name": "heavy-oil", "qty": 20 }],
      "image": "https://wiki.factorio.com/images/Solid_fuel_from_heavy_oil.png",
      "count": 0
    },
    {
      "name": "solid-fuel-from-light-oil",
      "ingredients": [{ "name": "light-oil", "qty": 10 }],
      "image": "https://wiki.factorio.com/images/Solid_fuel_from_light_oil.png",
      "count": 0
    },
    {
      "name": "solid-fuel-from-petroleum-gas",
      "ingredients": [{ "name": "petroleum-gas", "qty": 20 }],
      "image": "https://wiki.factorio.com/images/Solid_fuel_from_petroleum_gas.png",
      "count": 0
    },
    {
      "name": "speed-module-3",
      "ingredients": [
        { "name": "advanced-circuit", "qty": 5 },
        { "name": "processing-unit", "qty": 5 },
        { "name": "speed-module-2", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Speed_module_3.png",
      "count": 0
    },
    {
      "name": "spidertron",
      "ingredients": [
        { "name": "raw-fish", "qty": 1 },
        { "name": "rocket-control-unit", "qty": 16 },
        { "name": "low-density-structure", "qty": 150 },
        { "name": "effeciency-module-3", "qty": 2 },
        { "name": "rocket-launcher", "qty": 4 },
        { "name": "fusion-reactor", "qty": 2 },
        { "name": "exoskeleton", "qty": 4 },
        { "name": "radar", "qty": 2 }
      ],
      "image": "https://wiki.factorio.com/images/Spidertron.png",
      "count": 0
    },
    {
      "name": "spidertron-remote",
      "ingredients": [
        { "name": "rocket-control-unit", "qty": 1 },
        { "name": "radar", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Spidertron_remote.png",
      "count": 0
    },
    {
      "name": "stack-filter-inserter",
      "ingredients": [
        { "name": "electronic-circuit", "qty": 5 },
        { "name": "stack-inserter", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Stack_filter_inserter.png",
      "count": 0
    },
    {
      "name": "steam-engine",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "iron-gear-wheel", "qty": 8 },
        { "name": "pipe", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Steam_engine.png",
      "count": 0
    },
    {
      "name": "steam-turbine",
      "ingredients": [
        { "name": "copper-plate", "qty": 50 },
        { "name": "iron-gear-wheel", "qty": 50 },
        { "name": "pipe", "qty": 20 }
      ],
      "image": "https://wiki.factorio.com/images/Steam_turbine.png",
      "count": 0
    },
    {
      "name": "steel-furnace",
      "ingredients": [
        { "name": "steel-plate", "qty": 6 },
        { "name": "stone-brick", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Steel_furnace.png",
      "count": 0
    },
    {
      "name": "submachine-gun",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "copper-plate", "qty": 5 },
        { "name": "iron-gear-wheel", "qty": 10 }
      ],
      "image": "https://wiki.factorio.com/images/Submachine_gun.png",
      "count": 0
    },
    {
      "name": "substation",
      "ingredients": [
        { "name": "copper-plate", "qty": 5 },
        { "name": "steel-plate", "qty": 10 },
        { "name": "advanced-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Substation.png",
      "count": 0
    },
    {
      "name": "tank",
      "ingredients": [
        { "name": "steel-plate", "qty": 50 },
        { "name": "iron-gear-wheel", "qty": 15 },
        { "name": "advanced-circuit", "qty": 10 },
        { "name": "engine-unit", "qty": 32 }
      ],
      "image": "https://wiki.factorio.com/images/Tank.png",
      "count": 0
    },
    {
      "name": "train-stop",
      "ingredients": [
        { "name": "iron-plate", "qty": 6 },
        { "name": "steel-plate", "qty": 3 },
        { "name": "iron-stick", "qty": 6 },
        { "name": "electronic-circuit", "qty": 5 }
      ],
      "image": "https://wiki.factorio.com/images/Train_stop.png",
      "count": 0
    },
    {
      "name": "uranium-cannon-shell",
      "ingredients": [
        { "name": "uranium-238", "qty": 1 },
        { "name": "cannon-shell", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Uranium_cannon_shell.png",
      "count": 0
    },
    {
      "name": "uranium-fuel-cell",
      "ingredients": [
        { "name": "iron-plate", "qty": 10 },
        { "name": "uranium-235", "qty": 1 },
        { "name": "uranium-238", "qty": 19 }
      ],
      "image": "https://wiki.factorio.com/images/Uranium_fuel_cell.png",
      "count": 0
    },
    {
      "name": "uranium-processing",
      "ingredients": [{ "name": "uranium-ore", "qty": 10 }],
      "image": "https://wiki.factorio.com/images/Uranium_processing.png",
      "count": 0
    },
    {
      "name": "uranium-rounds-magazine",
      "ingredients": [
        { "name": "uranium-238", "qty": 1 },
        { "name": "piercing-rounds-magazine", "qty": 1 }
      ],
      "image": "https://wiki.factorio.com/images/Uranium_rounds_magazine.png",
      "count": 0
    },
    {
      "name": "utility-science-pack",
      "ingredients": [
        { "name": "processing-unit", "qty": 2 },
        { "name": "flying-robot-frame", "qty": 1 },
        { "name": "low-density-structure", "qty": 3 }
      ],
      "image": "https://wiki.factorio.com/images/Utility_science_pack.png",
      "count": 0
    },
    {
      "name": "wooden-chest",
      "ingredients": [{ "name": "wood", "qty": 2 }],
      "image": "https://wiki.factorio.com/images/Wooden_chest.png",
      "count": 0
    },
    {
      "name": "stone-wall",
      "image": "https://wiki.factorio.com/images/Wall.png",
      "ingredients": [],
      "count": 0
    }
  ]
