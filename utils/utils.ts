import { expect } from "@playwright/test";

export class Utils {
    public static isAlphabeticalOrder(arr: Array<string>) {
        let tamp = arr.slice().sort();
        return JSON.stringify(tamp) === JSON.stringify(arr);
    }
}