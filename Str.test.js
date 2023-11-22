const str = require("./Str");

test(("test case"), () => {
    expect(str("Hello world")).toMatch("Hello");
})