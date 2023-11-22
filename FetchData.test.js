const fetchData = require("./FetchData");

test(("fetching from endpoints"), async () => {
  const data = await fetchData();
  expect(data?.name).not.toEqual("Leanne Graham");
})

test(("fetching from endpoints"), async () => {
    const data = await fetchData();
    expect(data?.id).not.toBe(3);
  })