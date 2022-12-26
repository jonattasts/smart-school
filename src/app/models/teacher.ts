import { Discipline } from '../models/discipline';

export class Teacher {
    id: number;
    name: string;
    disciplines: Array<Discipline>;
}
