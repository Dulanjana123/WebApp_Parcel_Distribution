export interface IDriver {
    id: number;
    name: string;
    
}

export class Driver implements IDriver {
    id!: number;
    name!: string;
}
