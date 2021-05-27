import { debug } from '../../../ptu.js';
import { GetSpeciesArt } from '../../../utils/species-command-parser.js';
import Component from '../lib/component.js';

export default class EvolutionBlock extends Component {
    constructor(store) {
        super({
            store, 
            element: $('#evolutionContainer')
        })
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    async render(stageHasChanged = false) {
        // const species = this.state.species;
        // if(!species) return;

        // const isSpeciesRefresh = this.speciesId != this.state.species._id;
        // debug("Is refresh?", isSpeciesRefresh, stageHasChanged)
        // if(!stageHasChanged && !isSpeciesRefresh) return;

        // if(isSpeciesRefresh) {
        //     this.speciesId = this.state.species._id;

        //     const stages = {1: [], 2: [], 3: []};
        //     for(const evo of species.Evolution) {
        //         const speciesData = game.ptu.GetSpeciesData(evo[1].replace(/ /g, "-"))
        //         if(!speciesData) continue;

        //         const temp = {
        //             stage: evo[0], 
        //             name: evo[1], 
        //             level: evo[2], 
        //             restriction: evo[3],
        //             data: speciesData,
        //         }

        //         const imgSrc = game.settings.get("ptu", "defaultPokemonImageDirectory");
        //         if(imgSrc) {
        //         const imgPath = await GetSpeciesArt(temp.data, imgSrc);
        //             if(imgPath) {
        //                 temp.image = imgPath;
        //             }
        //         }
        //         stages[evo[0]].push(temp)
        //     }
        //     this.stages = stages;
        // };
        

        // const content = await renderTemplate("systems/ptu/templates/partials/charactermancer-evolution-partial.hbs", {stages: this.stages})

        // this.element.html(content);
    }
}