import { sayHello } from "./unit1";

describe('SayHello unit test suite', () =>{
    it('should return "Hello World', () => {
        expect(sayHello()).toBe("Hello, World")
    })
    it('should return "Hello Name', () => {
        expect(sayHello("Name")).toBe("Hello, Name")
    })
    it('should return "Hello Name', () => {
        expect(sayHello("Name")).not.toBe("Hello")
    })
})