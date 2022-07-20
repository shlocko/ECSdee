import {Canvas} from "./Canvas";

type system = (game: Game) => void

export class Game  {
    systems: Array<system>;
    
    constructor() {
        this.systems = [];
    }

    createDefaultRenderSystem(canvasElement: HTMLCanvasElement, width: number, height: number) {
        const canvas = new Canvas(canvasElement, width, height);
        this.systems.push((game: Game) => {
            canvas.clear("blue");
        });
    }


   init() {
        this.systems.forEach(fn => {
            fn(this);
        });
    }
}



