const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const pImgs = ['images/p1.png', 'images/p2.png', 'images/p3.png', 'images/p4.png'];
const vImgs = ['images/v1.png', 'images/v2.png'];

let pCount = 0;
html = html.replace(/<div class="portfolio-item[^>]*data-category="photo" data-src="[^"]*"[^>]*>\s*<img src="[^"]*"/g, (match) => {
  let imgPath = pImgs[pCount % pImgs.length];
  pCount++;
  return match.replace(/data-src="[^"]*"/, `data-src="${imgPath}"`).replace(/<img src="[^"]*"/, `<img src="${imgPath}"`);
});

let vCount = 0;
html = html.replace(/<div class="portfolio-item[^>]*data-category="video" data-video="[^"]*"[^>]*>\s*<img src="[^"]*"/g, (match) => {
  let imgPath = vImgs[vCount % vImgs.length];
  vCount++;
  return match.replace(/<img src="[^"]*"/, `<img src="${imgPath}"`);
});

fs.writeFileSync('index.html', html);
