import { Constant } from "./constant";

export class Actions {
    public static delay() {
        return new Promise( resolve => setTimeout(resolve, Constant.LOADING_TIME) );
    }
}