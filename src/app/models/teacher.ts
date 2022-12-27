import { Discipline } from '../models/discipline';

export class Teacher {

    constructor() {
        this.id = 0
        this.name = ''
        this.disciplines = []
    }

    id: number;
    name: string;
    disciplines: Array<Discipline>;
}
