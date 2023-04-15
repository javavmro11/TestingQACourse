const puppeteer =  require ('puppeteer')

    describe('My Firt Test with Puppeteer', () => {
        
        it('Debe de abrir y cerrar el navegador', async () => {
            const browsere = await puppeteer.launch({
                headless: false
            })
            const pages = await browsere.newPage()
            await pages.goto('https://www.google.com/')
            await pages.waitForTimeout(5000)
            await browsere.close()
        }, 100000)
    })