const COURSE_DATA = {
  "name": "AAA - Year 8 Adventure Game",
  "description": "Year 8 Adventure Game",
  "lessons": [
    {
      "name": "Using Nested If statements",
      "slug": "using-nested-if-statements",
      "materials": [
        {
          "name": "Adventure Game",
          "slug": "adventure-game",
          "type": "assignment",
          "trinket": {
            "shortCode": "38ee9dd270fc",
            "name": "Adventure Game Trinket",
            "lang": "python3",
            "submissionsDue": {
              "enabled": false
            },
            "submissionsCutoff": {
              "enabled": false
            },
            "availableOn": {
              "enabled": false
            },
            "hideAfter": {
              "enabled": false
            }
          },
          "content": "You can create the adventure game using nested if statements. This simply means you have one if statement within another.\n\nMake sure you use the tab button to create indentations that line up.\n\nUse the template code to start you off and recreate your own map.\n\nYou can use as many features as you can! Inventory items, battles, quizzes.",
          "starterCode": "current_room = \"T33\"      # starting room\n\ninventory = [\"key\"]\n\ngame = True\n# Game loop, with an if statement for every room\nwhile game == True:\n  if current_room == \"T33\":\n    print(\"You are in T33\")\n    print(\"You can go to T31 or T34\")\n    choice = input(\"Enter T31 or T34: \")\n    if choice != \"T31\" and choice != \"T34\":\n          choice = input(\"Try again, enter T31 or T34: \")\n    current_room = choice\n\n  elif current_room == \"T31\":\n    print(\"You are in T31\")\n    print(\"You can go to T33 or the stairs\")\n    choice = input(\"Enter T33 or stairs: \")\n    if choice != \"T33\" and choice != \"stairs\":\n          choice = input(\"Try again, enter T33 or stairs: \")\n    if choice == \"T33\":\n      current_room = \"T33\"\n    elif choice == \"stairs\" and \"key\" not in inventory:\n      print(\"You can not use the stairs as you don't have the key\")\n    elif choice == \"stairs\" and \"key\" in inventory:\n      current_room = \"stairs\"\n\n  elif current_room == \"stairs\":\n    print(\"You have found the treasure, game over!\")\n    game = False\n\n  elif current_room == \"T34\":\n    print(\"You are in T34\")\n    print(\"You can go to T33\")\n    choice = input(\"Enter T33: \")\n    if choice != \"T33\":\n          choice = input(\"Try again, enter T33: \")\n    current_room = choice\n"
        },
        {
          "name": "HELP! Using the inventory",
          "slug": "help-using-the-inventory",
          "type": "page",
          "content": "## How do I add to the inventory?\n\nTo add to the inventory you need to add an item to the inventory list by using append(). For example...\n\n```\ninventory.append(\"sword\")\n```\n\n* In the if statements find the room where you want to pick up the item.\n* Ask them if they want to pick up the item\n* If they say yes, append the item to the inventory list\n\n```\n  elif current_room == \"T34\":\n    print(\"You are in T34\")\n    answer = input(\"Would you like to pick up the sword\")\n    if answer == \"yes\":\n        inventory.append(\"sword\")\n        print(f\"Your inventory is {inventory})\n    print(\"You can go to T33\")\n    choice = input(\"Enter T33\")\n    if choice != \"T33\":\n          choice = input(\"Try again,  enter T33\")\n    current_room = choice \n```    \n\n## How do I use items in the inventory?\n\nYou are going to use the inventory to allow access to rooms/places. You can use the condition\n\n```\n# checks it item is in the inventory\nif \"sword\" in inventory:\n    do something\n```\n\nor\n```\n# checks if the item is NOT in the inventory\nif \"sword\" not in inventory:\n    do something\n```\n\nIn the exmaple below it is used to only allow access to the stairs if they selected it AND they have a key in their inventory.\n```\nelif current_room == \"T31\":\n    print(\"You are in T31\")\n    print(\"You can go to T33 or the stairs \")\n    choice = input(\"Enter T33 or stairs\")\n    if choice == \"T33\":\n      current_room = \"T33\"\n    elif choice == \"stairs\" and \"key\" not in inventory:    # check the inventory for a key to enter stairs\n      print(\"You can not use the stairs as you don't have the key\")\n    elif choice == \"stairs\" and \"key\" in inventory:\n      current_room = \"stairs\"\n```      "
        },
        {
          "name": "HELP! How do I add a monster to attack?",
          "slug": "help-how-do-i-add-a-monster-to-attack",
          "type": "page",
          "content": "## How do I add the concept of health?\n\nFirst create a variable to store the players health at the start of your code.\n\n```\nhealth = 10\n```\n\n## Create a monster attack that could reduce a players health?\n\nIn a room a player may meet a monster. You can decide randomly whether they win or loss the battle.\n\nOn the first line of your code add the random library as you will need it later.\n\n```\nimport random\n```\n\n* Then find the room you want to add the battle. \n* Ask the user if they want to run or battle\n* If they say battle then randomly select win or lose (watch your brackets!)\n* Change the health accordingly\n\nFor example:\n\n```\nelif current_room == \"T34\":\n    print(\"You are in T34\")\n    print(\"You have met a monster\")\n    answer = input(\"Choose battle or run\")\n    if answer == \"battle\":\n        result = random.choice([\"win\", \"lose\"])\n        if result == \"win\":\n            print(\"YOU WIN\")\n            health = health +1\n            print(f\"Your health is {health}\")\n        else:\n            print(\"YOU LOSE\")\n            health = health - 1\n            print(f\"Your health is {health}\")\n    print(\"You can go to T33\")\n    choice = input(\"Enter T33\")\n    if choice != \"T33\":\n          choice = input(\"Try again,  enter T33\")\n    current_room = choice    \n```"
        }
      ]
    },
    {
      "name": "Using 2 D Arrays",
      "slug": "using-2-d-arrays",
      "materials": [
        {
          "name": "Adventure Game (advanced)",
          "slug": "adventure-game-advanced",
          "type": "assignment",
          "trinket": {
            "shortCode": "06124fd263f8",
            "name": "Adventure Game (advanced) Trinket",
            "lang": "python3",
            "submissionsDue": {
              "enabled": false
            },
            "submissionsCutoff": {
              "enabled": false
            },
            "availableOn": {
              "enabled": false
            },
            "hideAfter": {
              "enabled": false
            }
          },
          "content": "# Using 2D lists\n\nA 2D list is simply a list of lists.\n\n```python\nmy1Dlist = [\"yellow\", \"blue\", \"red\"]\nprint(my1Dlist[1])\n```\n\nThis code will output \"blue\"\n\n```python\nmy2Dlist = [[\"yellow\", 2], [\"blue\", 3], [\"red\", 6]]\nprint(my2Dlist[1][0])\nprint(my2Dlist[0][1])\n```\n\nThis code will output \"blue\", followed by 2.\n\n```python\nnewValue = my2Dlist[1][0]\n```\nThe first index [1] will access the list in position 1, then the second index [0] will access the first value in this list.\n\nYou are going to use this structure to store the information about your map.\n\n```python\n\n# name, description, pickup, need to access, where you can go next\n\nrooms = [\n    [\"Forest\", \"A dark forest with tall trees.\", [], [\"axe\"], [\"Cave\", \"River\"]],\n    [\"Cave\", \"A cold cave with dripping water.\",[], [], [\"Forest\", \"Castle\"]],\n    [\"River\", \"A fast river blocks part of the path.\",[], [\"rope\"], [\"Forest\"]],\n    [\"Castle\", \"An old ruined castle.\",[\"axe\"], [\"key\"], [\"Cave\"]]\n]\n```\n\nThe starter code will move you around rooms however it does not yet use the inventory or items to collect and pick up. You will need to work out how to do this!\n\n",
          "starterCode": "# name, description, pickup, need to access, where you can go next\n\nrooms = [\n    [\"Forest\", \"A dark forest with tall trees.\", [], [\"axe\"], [\"Cave\", \"River\"]],\n    [\"Cave\", \"A cold cave with dripping water.\", [], [], [\"Forest\", \"Castle\"]],\n    [\"River\", \"A fast river blocks part of the path.\", [], [\"rope\"], [\"Forest\"]],\n    [\"Castle\", \"An old ruined castle.\", [\"axe\"], [\"key\"], [\"Cave\"]]\n]\n\ninventory = []\n\ncurrent_room = \"Forest\"\n\nwhile True:\n    for room in rooms:\n        if room[0] == current_room:\n            print(f\"\\nYou are in the {room[0]}\")\n            print(room[1])\n            print(\"You can go to:\", \", \".join(room[4]))\n\n            next_room = input(\"Enter a room name or type quit: \").title()\n\n            if next_room == \"Quit\":\n                print(\"Game over.\")\n                break\n            elif next_room in room[4]:\n                current_room = next_room\n            else:\n                print(\"Invalid move.\")\n"
        }
      ]
    }
  ]
};
