export class StringHelper {
    public static formatString(str: string, ...val: string[]): string {
        for (let i = 0; i < val.length; i++) {
            str = str.replace(`{${i}}`, val[i]);
        }
        return str;
    }
}