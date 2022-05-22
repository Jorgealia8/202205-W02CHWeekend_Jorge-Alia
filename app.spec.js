import { tourArray } from './app';
let array = [
    [0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1],
];
let arraySecond = [
    [1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
];

describe('Given the function tourArray', () => {
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[4][1];
        test('In newArray[4][1] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[0][0];
        test('In newArray[0][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[0][4];
        test('In newArray[0][4] then it should return 0 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[4][0];
        test('In newArray[4][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[4][4];
        test('In newArray[4][4] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[0][2];
        test('In newArray[0][2] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[1][0];
        test('In newArray[1][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[1][4];
        test('In newArray[1][4] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[4][3];
        test('In newArray[4][3] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[1][1];
        test('In newArray[1][1] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[2][2];
        test('In newArray[2][2] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[3][3];
        test('In newArray[3][3] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[0][1];
        test('In newArray[0][1] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[0][3];
        test('In newArray[0][3] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[1][2];
        test('In newArray[1][2] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[2][0];
        test('In newArray[2][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[2][1];
        test('In newArray[2][1] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[2][3];
        test('In newArray[2][3] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[2][4];
        test('In newArray[2][4] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[3][0];
        test('In newArray[3][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[3][1];
        test('In newArray[3][1] then it should return 1 ', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[3][2];
        test('In newArray[3][2] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[3][4];
        test('In newArray[3][4] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(array);
        let result;
        result = newArray[4][2];
        test('In newArray[4][2] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(arraySecond);
        let result;
        result = newArray[0][0];
        test('In newArray[0][0] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
    describe('When it receives the parameters array,', () => {
        let newArray = tourArray(arraySecond);
        let result;
        result = newArray[0][4];
        test('In newArray[0][4] then it should return 0 ', () => {
            expect(result).toBe(0);
        });
    });
});
