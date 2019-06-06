import {pad, millisecondsToString} from '../src/js/misc'

describe('padding is adding a zero if number is smaller than 10', ()=>{
    test('padding 1', ()=>{
        expect(pad(2)).toBe('02');
        });
});

describe('padding is not added to a number greater or equal to 10', () =>{
    test('padding 2', ()=>{
        expect(pad(10)).toBe(10);
    });
});

describe('returns null when given null', () =>{
    test('padding 3', ()=>{
        expect(pad(null)).toBe(null);
    });
});

describe('1000 ms should be converted to 00:00:01.0', ()=>{
    test('milli 1', ()=>{
        expect(millisecondsToString(1000)).toBe('00:00:01.0');
    });
});

describe('0 ms should be converted to 00:00:00.0', ()=>{
    test('milli 2', ()=>{
        expect(millisecondsToString(0)).toBe('00:00:00.0');
    });
});

describe('returns null when given null', ()=>{
    test('milli 3', ()=>{
        expect(millisecondsToString(null)).toBe(null);
    });
});
