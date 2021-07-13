const fs = require('fs');
const puppeteer = require('puppeteer');

// tira um print da url informada
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://about.gitlab.com/');
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();

(async () => {
    const gerarHtml = fs.readFileSync('./exemplo.html', {encoding:'utf-8'});
    console.log(gerarHtml)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(gerarHtml.toString());
    await page.addStyleTag({path: 'estilo.css'});
    await page.pdf({ path: 'example.pdf', format: 'a4'});
  
    await browser.close();
  })();