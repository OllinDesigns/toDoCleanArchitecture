import type * as Testfunctions  from '../src/sum'

const {sum}  = jest.requireActual<typeof Testfunctions>("../src/sum")


describe('this test if the test environment works', () => {
    // Tests that the function returns the sum of two positive integers
    it('should return the correct sum of two positive integers', () => {
        expect(sum(2, 3)).toBe(5);
    });
})

