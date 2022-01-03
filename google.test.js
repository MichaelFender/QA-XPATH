const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Google", async () => {
    await driver.get('https://www.google.com/')
    
    let searchSelector = /* The search bar selector in CSS */

    let searchBarElement = await driver.findElement(By.css(searchSelector))

    await searchBarElement.sendKeys('Your Search Here \n')

    await driver.sleep(5000)
    
    await driver.quit()
})