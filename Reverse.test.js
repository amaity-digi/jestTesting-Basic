const reverse = require("./Reserver");

test(("reverse String test case"), () => {
    expect(reverse("Vivek")).toEqual("keviv")
})

test(("reverse String test case exits"), () => {
    expect(reverse("Vivek")).toBeDefined();
})