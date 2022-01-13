const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Google", async () => {
    await driver.get('https://www.google.com')

    let searchSelector = await driver.findElement(By.css('[name="q"]')).sendKeys('monkeys\n')

    //let searchBarElement = await driver.findElement(By.css(searchSelector))

    //await searchBarElement.sendKeys('Metafilter\n')

    await driver.sleep(5000)

    await driver.quit()
})

//npx jest google.test.js