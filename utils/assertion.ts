import { expect } from "@playwright/test"

export class Assertion {
    public static assertTrue(x: boolean) {
        expect(x).toBe(true);
    }

    public static assertFalse(x: boolean) {
        expect(x).toBe(false);
    }

    public static assertEqual(actual: any, expected: any) {
        expect(actual).toEqual(expected);
    }
}