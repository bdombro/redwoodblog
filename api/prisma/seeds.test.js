const rewire = require("rewire")
const seeds = rewire("./seeds")
const main = seeds.__get__("main")
// @ponicode
describe("main", () => {
    test("0", async () => {
        await main()
    })
})
