export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, width: number, height: number){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;

    }

    clear(color?: string){
        this.ctx.fillStyle = color || "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }


}