const obj = {
    foo: {
        bar: {
            baz: 'hello world'
        }
    }
};

const property1 = 'foo'
const property2 = 'bar'
const property3 = 'baz'

const value = obj[property1]?.[property2]?.[property3]
console.log(value);