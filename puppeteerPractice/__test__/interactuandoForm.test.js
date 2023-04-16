const puppeteer = require ('puppeteer')

    describe('Prueba de Navegacion con Puppeteer', () => {

        it('Debe abrir el navegador y hacer operaciones basicas en el', async() => {
            const browsr = await puppeteer.launch({
                headless: false,
                devtools: false,
                
            })
            const page = await browsr.newPage()
            await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
            await page.click('#authentication > span', {button: 'right', delay: 1000})
            //})
            await page.waitForTimeout(4000)
            await browsr.close()
        }, 300000)
    });