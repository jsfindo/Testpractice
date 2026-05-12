import { capitalize } from "./math"

test("capitalizer", ()=>{
    expect(capitalize("hello")).toBe("Hello")
})

import { reversestring } from "./math"

test("reverser", ()=>{
    expect(reversestring("Hello")).toBe("olleH")
})

import { caesarCipher } from "./math"

test("cypher",()=>{
    expect(caesarCipher("abc",1)).toBe("bcd")
})