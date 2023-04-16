const puppeteer = require ('puppeteer')

    describe('Prueba de Navegacion con Puppeteer', () => {

        it('Debe abrir el navegador y hacer operaciones basicas en el', async() => {
            const browsr = await puppeteer.launch({
                headless: false,
                devtools: false
                //defaultViewport: null
            })
            const page = await browsr.newPage()
            //await page.goto('https://yahoo.com/')
            await page.goto('https://github.com/')
            await page.waitForTimeout(5000)
            await page.waitForSelector('img')
            // Recargar Pagina
            await page.reload()

            //Navegar a otro sitio web
            await page.goto('https://platzi.com/')
            await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Logo > div > a > div > figure > img')
            await page.goBack()
            await page.goForward()

            const page2 = await browsr.newPage()
            await page2.goto('https://google.com/')

            await browsr.close()
        }, 300000)
    });