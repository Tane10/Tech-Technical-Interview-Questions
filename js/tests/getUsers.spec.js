import { getUsers } from "../index"
import { records } from "./data/testData"

describe('getUsers test suite', () => {

    it('Should returns all user ids that performed that action within that time window 700 - 900', () => {
        const userStart = getUsers(records, "start", 700, 900);
        expect(userStart).toEqual([3])
    });

    it('Should returns all user ids that performed that action within that time window 250 - 900', () => {
        const userStop = getUsers(records, "stop", 250, 900);
        expect(userStop).toEqual([1, 2])
    });

    it('Should returns an empty array if no action happened during the time', () => {
        const emptyArray = getUsers(records, "start", 1000, 9000);
        expect(emptyArray).toEqual([])
    });
});