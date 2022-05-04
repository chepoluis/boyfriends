/**
 * Returns a random number, where the limit is the number passed as parameter
 * @param max 
 * @returns random number
 */
export const getRandomInt = (max: number): number => {
    const min = 0;
    max = Math.floor(max) - 50;

    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}