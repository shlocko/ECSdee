import {Canvas} from "./Engine";

type system = (game: Game) => void

export class Game  {
    private _systems: Array<system>;
    private _lastRenderTime: number;

    /**
     * 
     */
    constructor() {
        this._systems = [];
        this._lastRenderTime = 0;
    }

    createDefaultRenderSystem(canvasElement: HTMLCanvasElement, width: number, height: number) {
        const canvas = new Canvas(canvasElement, width, height);
        this._systems.push((game: Game) => {
            canvas.clear("blue");
            console.log("render");
        });
    }

    addSystem(system: system){
        this._systems.push(system);
    }
    
    private onNewFrame = (deltaTime: number) => {
        
        this._systems.forEach(fn => {
            fn(this);
        });

    }
    
    init() {
        const handleTick = (time: number) => {
            let deltaTime: number = time- this._lastRenderTime;


            this._lastRenderTime = time;
            requestAnimationFrame(handleTick);
        }
        requestAnimationFrame(handleTick);
    }
}
