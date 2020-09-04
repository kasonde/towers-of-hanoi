export class Piece{
    weight:number;

    width():number{
        return this.weight * 10
    }

    constructor(weight:number){
        this.weight = weight;
    }
}

export class Tower{
    name:string;
    pieces:Piece[];

    async addPeice(piece:Piece){
        console.log(`${this.name} added peice ${piece.weight}`)
        this.pieces.push(piece);
    }

    removePiece(piece:Piece){
        let p = this.pieces.find(p=>p.weight === piece.weight);
        this.pieces = this.pieces.filter(p=>p.weight !== piece.weight);
        return p;
    }

    constructor(name:string, pieces:Piece[]){
        this.name = name;
        this.pieces = pieces;
    }
}