const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("GitHub", async () => {
    await driver.get('https://www.github.com/')

    await driver.sleep(5000)
    await driver.quit()
})

//npx jest github.test.js