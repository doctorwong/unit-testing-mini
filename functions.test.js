const functions = require("./functions")

//the test is a function that takes a string (the name of the test)

test("returnTwo", () => 
{
    expect(functions.returnTwo()).toEqual(2);
})

test("greeting", () =>
{
    expect(functions.greeting('James')).toEqual('Hello, James.')
    expect(functions.greeting('Jill')).toEqual('Hello, Jill.')
})

describe("Math Functions:", () => {

test("add", () =>
{
    expect(functions.add(1,2)).toEqual(3)
    expect(functions.add(5,9)).toEqual(14)
})

test("multiply", () =>
{
    expect(functions.multiply(3,3)).toEqual(9)
    expect(functions.multiply(9,9)).toEqual(81)
})

test("divide", () =>
{
    expect(functions.divide(5,1)).toEqual(5)
    expect(functions.divide(8,2)).toEqual(4)
})

test("subtract", () =>
{
    expect(functions.subtract(4,2,)).toEqual(2)
    expect(functions.subtract(10,2)).toEqual(8)
})
})
