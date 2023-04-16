const puppeteer = require ('puppeteer')

    describe('Prueba de Navegacion con Puppeteer', () => {

        it('Debe abrir el navegador y hacer operaciones basicas en el', async() => {
            const browsr = await puppeteer.launch({
                headless: false,
                args: ['--window-size=1024,768']
                
            })
            const page = await browsr.newPage()
            await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
            // await page.click('#authentication > span', {button: 'right', delay: 1000})
                      
            await page.click('#authentication > button', {clickCount : 2, delay:1000} )
            page.on('dialog', async() => {
                await dialog.accept()
            })
            
            //})
            await page.goto('https://devexpress.github.io/testcafe/example/')
            await page.type('#developer-name', 'Ronald', { delay: 200 })
            await page.click('#remote-testing')
            await page.click('#continuous-integration-embedding')
            await page.click('#tried-test-cafe')
            await page.click('#slider', '5')
            await page.select('#preferred-interface', 'Both')
            await page.type('#comments', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit pariatur reiciendis nobis quos cum voluptatibus harum corrupti dolorum. Deserunt cum fugit sapiente recusandae omnis atque deleniti natus laudantium tempora ipsum!', {delay:100})
            
            //await page.waitForSelector('#preferred-interface', {delay:1500})
            // await page.listenerCount('#preferred-interface', 2)
            // await page.select('#preferred-interface', '2', 'delay:500')
            await page.click('#submit-button')
            await page.waitForTimeout(4000)
            await browsr.close()
        }, 300000)
    });