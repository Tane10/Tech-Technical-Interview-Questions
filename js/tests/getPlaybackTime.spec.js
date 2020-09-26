import { getPlaybackTime } from "../index"
import { records } from "./data/testData"

describe('getPlaybackTime test suite', () => {

    it('Should throw an error if function is called without passing params', () => {
        expect(() => { getPlaybackTime() }).toThrowError("Please add required parameters")
    });

    it('Should return total “unique” playback time in seconds for user_1', () => {
        const userId_1 = getPlaybackTime(1, records);
        expect(userId_1).toBe(310)
    });

    it('Should return total “unique” playback time in seconds for user_2 .', () => {
        const userId_2 = getPlaybackTime(2, records);
        expect(userId_2).toBe(290)
    });

    it('Should return 0 if user id is not found', () => {
        const notFoundUser = getPlaybackTime(10, records);
        expect(notFoundUser).toBe(0)
    });
});