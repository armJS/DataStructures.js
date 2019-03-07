import Stack from "./Stack";

export function baseConverter(decNumber: number, base: number) {
    const remStack = new Stack<number>();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        let dig = remStack.pop();
        if (dig !== undefined) {
            baseString += digits[dig];
        }
    }

    return baseString;
}

