export const checkNumber = (number) => {
    let isPrime = true;
    if (number < 2 || isNaN(number)) {
        console.log("Số nguyên tố không được bé hơn 2")
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Là số nguyên tố: " + number);
    } else {
        console.log("Không phải là số nguyên tố");
    }
}

export const isPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}
