const puppeteer = require('puppeteer')

describe('Wait for one Element of DOM', () => {
    
    it('Here we will demonstrate the different waits that exist in the DOM ', async() => {

        const browsr = await puppeteer.launch({
            headless: false
        })
        const pages = browsr.newPage()
        await pages.goto('')
    });
});