import { expect } from "@playwright/test";

export class Utils {
    public static isAlphabeticalOrder(arr: Array<string>) {
        const tamp = arr;
        return tamp.slice().sort() == arr;
    }
}