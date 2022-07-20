import {Canvas} from "./Canvas";

type system = (game: Game) => void

export class Game  {
    systems: Array<system>;
    lastRenderTime: number;
    
    constructor() {
        this.systems = [];
        this.lastRenderTime = 0;
    }
    
    createDefaultRenderSystem(canvasElement: HTMLCanvasElement, width: number, height: number) {
        const canvas = new Canvas(canvasElement, width, height);
        this.systems.push((game: Game) => {
            canvas.clear("blue");
            console.log("render");
        });
    }
    
    addSystem(system: system){
       this.systems.push(system); 
    }
    
    private loop(timestamp){
        let deltaTime: number = timestamp - this.lastRenderTime;
        
        this.systems.forEach(fn => {
            fn(this);
        });
        
       this.lastRenderTime = timestamp;
       requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
       
    }
    
    
   init() {
        requestAnimationFrame((timestamp)=>this.loop(timestamp/1000));
    }
}



