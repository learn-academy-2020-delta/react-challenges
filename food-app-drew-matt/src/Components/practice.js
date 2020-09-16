const { within } = require("@testing-library/react")

const filterDigitLength = (arr, num) => {
    return arr.filter(number => num.toString().length === number)
    }
    //length != num we don't push/filter
    //parseInt numbers that will be push/filter
    //if else may be utilize
    //map through array then split

   const additiveInverse = (arr) => {
        return arr.map(value => value *= -1)
    }

   const posCo = (num) => {
        return 2 ** num
    }

    const existsHigher = (arr, n) => {
        return arr.some(Math.max >= n)
    }

