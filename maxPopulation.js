
// type Life = { birthYear: number, deathYear: number };

class Life {
    constructor(birthYear, deathYear) {
        this.birthYear = birthYear
        this.deathYear = deathYear
    }
}

const lifes = [
    new Life(2000, 2021),
    new Life(2000, 2010),
    new Life(1975, 2005),
    new Life(1975, 2003),
    new Life(1803, 1809),
    new Life(1750, 1869),
    new Life(1840, 1935),
    new Life(1803, 1921),
    new Life(1894, 1921),
]

const getMaxPopulatedYear = lifes => lifes
    .map(({ birthYear, deathYear }) => ([ // Map to "life events"
        { type: 'birth', year: birthYear },
        { type: 'death', year: deathYear }
    ]))
    .reduce((acc, item) => [...acc, ...item], []) // flatMap
    .sort((e1, e2) => e1.year > e2.year ? 1 : -1) // sort ascending
    .reduce((acc, { type, year }) => { // find max year with max population
        if (type === 'birth') {
            acc.currentPopulation++;
            if (acc.currentPopulation > acc.maxPopulation) {
                acc.maxPopulation = acc.currentPopulation;
                acc.maxYear = year;
            }
        } else if (type === 'death') {
            acc.currentPopulation--;
        }

        return acc;
    }, { maxYear: 0, maxPopulation: 0, currentPopulation: 0 })
    //.maxYear; // Return max year

console.log(getMaxPopulatedYear(lifes));