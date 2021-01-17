import React from 'react';

class addNPC extends React.Component {
    render(){
        const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Orc', 'Leonin', 'Satyr', 'Aarakocra', 'Genasi', 'Goliath', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Tortle', 'Changling', 'Kalashtar', 'Shifter', 'Warforged', 'Gith', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken', 'Verdan', 'Locathah', 'Grung']

        return(
            <div>
                <form>
                    <label for="npcName">Name</label>
                    <input type="text" name="npcName" id="npcName" placeholder="i.e. George Strongjaw"></input><br/>
                    <label for="npcRace">Race</label>
                    <select name='npcRace' id='npcRace'>
                        <option value="blank" selected disabled>Select a race...</option>
                        {races.sort().map(race => <option value={race}> {race} </option>)}
                    </select><br/>
                    
                </form>
            </div>
        )
    }
}

export default addNPC;