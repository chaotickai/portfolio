import React from 'react';

class addNPC extends React.Component {
    render(){
        const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Orc', 'Leonin', 'Satyr', 'Aarakocra', 'Genasi', 'Goliath', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Tortle', 'Changling', 'Kalashtar', 'Shifter', 'Warforged', 'Gith', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken', 'Verdan', 'Locathah', 'Grung']

        const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']

        const abilities = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha']

        const attitudes = ['Positive', 'Neutral', 'Negative']

        return(
            <div>
                <form>
                    <label htmlFor="npcName">Name</label>
                    <input type="text" name="npcName" id="npcName" placeholder="i.e. Geller Strongjaw"></input><br/>

                    <label htmlFor="npcRace">Race</label>
                    <select name='npcRace' id='npcRace' >
                        <option selected disabled>Select a race...</option>
                        {races.sort().map((race, index) => <option value={race} key={index}> {race} </option>)}
                    </select><br/>

                    <label htmlFor="npcAlignment">Alignment</label>
                    <select name="npcAlignment" id="npcAlignment">
                        <option selected disabled>Select an alignment...</option>
                        {alignments.map((alignment, index) => <option value={alignment} key={index}> {alignment} </option>)}
                    </select><br/>

                    <label htmlFor="npcLocation">Location</label>
                    <input type="text" name="npcLocation" id="npcLocation" placeholder="i.e. The Township of Hollerman"></input><br/>

                    <label htmlFor="npcAttitude">Attitude towards the party</label>
                    <select name="npcAttitude" id="npcAttitude">
                        <option selected disabled>Select an attitude...</option>
                        {attitudes.map((attitude, index) => <option value={attitude} key={index}> {attitude} </option>)}
                    </select><br/>

                    <label htmlFor='npcHP'>Hit Points</label>
                    <input type='number' defaultValue='5' min='1' max='999' name='npcHP' id='npcHP'></input>
                    
                    <label htmlFor='npcAC'>Armor Class</label>
                    <input type='number' defaultValue='10' min='1' max ='25' name='npcAC' id='npcAC' ></input><br/>

                    <label>Ability Score Spread</label>
                    {abilities.map((ability, index) => <div key={index}> <label htmlFor={'npc' + ability}> {ability} </label> <input type='number' defaultValue='10' min='1' max='20' name={'npc' + ability} id={'npc' + ability} ></input> </div>)}

                </form>
            </div>
        )
    }
}

export default addNPC;