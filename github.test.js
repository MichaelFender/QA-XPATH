const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("github", async () => {
  
    await driver.get('https://github.com/')

    driver.manage().window().maximize();

    let hub = await driver.findElement(By.xpath('/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a'))

    await hub.click()

    let oneHub = await driver.findElement(By.css('[name="login"]'))

    await oneHub.sendKeys("MichaelFender")

    let pass = await driver.findElement(By.css('[name="password"]'))

    await pass.sendKeys("10Columbine99#")

    let cl = await driver.findElement(By.css('[name="commit"]'))

    await cl.click()

    let cd = await driver.findElement(By.xpath('(//span[@class="dropdown-caret"])[2]'))

    await cd.click()
    //END
    // let chips = await driver.findElement(By.xpath('html/body/div[1]/header/div[7]/details/details-menu/a[2]'))

    // await chips.click()

    // let prof = await driver.findElement(By.xpath('/html/body/div[1]/header/div[7]/details/details-menu/a[1]'))

    // await prof.click()
    let yourProfileButton = await driver.findElement(By.css('.js-feature-preview-indicator-container > details-menu:nth-child(2) > a:nth-child(5)]'))
   await yourProfileButton.click()
   await driver.sleep(2000)
    // await driver.get('https://github.com/michaelfender/')

    let editProfile = await driver.findElement(By.xpath('//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[2]/button'))

    await editProfile.click()
})    

//npx jest github.test.js
