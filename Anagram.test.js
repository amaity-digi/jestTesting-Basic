const anagram = require("./Anagram");

test(("isAnagram Check"), () => {
    expect(anagram).toBeDefined();
})

test(("listen or silent checking"), () => {
    expect(anagram("listen", "silent")).toBeTruthy();
})