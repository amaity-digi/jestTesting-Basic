const Sum = require('./Sum');

test(("Should be 10 + 20 Addition"), () =>{
   const result = Sum(10, 20);
   expect(result).toBe(30);
})

it(("object assigment"), () => {
  const obj = {};
  expect(obj).toEqual({});
})

test(("trusy or falsy check"), () => {
    const nullContainer = null;
    expect(nullContainer).not.toBeTruthy();
})

