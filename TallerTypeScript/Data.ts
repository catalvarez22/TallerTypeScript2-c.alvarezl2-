// File: Data.ts
class Serie {
    constructor(
        public id: number,
        public name: string,
        public channel: string,
        public seasons: number
    ) {}
}

const seriesData: Serie[] = [
    new Serie(1, 'Breaking Bad', 'AMC', 5),
    new Serie(2, 'Game of Thrones', 'HBO', 8),
    new Serie(3, 'Mr. Robot', 'USA Network', 4),
    new Serie(4, 'The Mandalorian', 'Disney+', 2),
    new Serie(5, 'The Witcher', 'Netflix', 1),
    // Agrega más series aquí...
];

export default seriesData;
