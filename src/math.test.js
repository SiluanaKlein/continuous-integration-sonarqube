const { addition, subtraction, multiplication } = require("./math")

test("add 1+2 to be equal 3", () => {
  expect(addition(1, 2)).toBe(3)
})

test("subtract 4-2 must be 2", () => {
  expect(subtraction(4, 2)).toBe(2)
})

test("multiplying 4x2 should be 82", () => {
  expect(multiplication(4, 2)).toBe(8)
})
