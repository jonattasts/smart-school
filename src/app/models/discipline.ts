export class Discipline {
    constructor(name: string) {
        this.name = name;
    }

    id: number;
    name: string;
    teacherId: number;
    studentsDisciplines: any[];
}