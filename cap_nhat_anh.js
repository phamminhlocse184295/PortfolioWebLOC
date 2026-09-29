const fs = require('fs');
const path = require('path');

const indexHtmlPath = 'd:/Portfolio/index.html';
const imagesDir = 'd:/Portfolio/images';

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Update profile image to Loc2.jpg
indexHtml = indexHtml.replace(/<img src="images\/Loc1\.jpg"([^>]+)>/, '<img src="images/Loc2.jpg"$1>');
indexHtml = indexHtml.replace(/<img src="images\/LOC\.png"([^>]+)>/, '<img src="images/Loc2.jpg"$1>');

// Generate Portfolio Grid
let newGrid = '';
const categories = [
  { folder: 'portrait', name: 'Chân dung', tag: 'portrait' },
  { folder: 'event', name: 'Sự kiện', tag: 'event' },
  { folder: 'wedding', name: 'Đám cưới', tag: 'wedding' },
  { folder: 'landscape', name: 'Phong cảnh', tag: 'landscape' },
];

let counter = 1;
for (const cat of categories) {
  const dirPath = path.join(imagesDir, cat.folder);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
    for (const file of files) {
      const isWide = Math.random() > 0.8 ? ' wide' : '';
      newGrid += `
        <div class="portfolio-item${isWide} reveal" data-category="${cat.tag}" data-src="images/${cat.folder}/${file}" tabindex="0" role="button" aria-label="Photo ${counter}">
          <img src="images/${cat.folder}/${file}" alt="${cat.name} by Phạm Minh Lộc" loading="lazy" />
          <div class="portfolio-overlay"><span class="portfolio-tag">${cat.name}</span><h3 class="portfolio-name">Tác phẩm ${counter}</h3></div>
        </div>`;
      counter++;
    }
  }
}

// Add videos
const videoFiles = fs.readdirSync(imagesDir).filter(f => f.match(/\.(mp4|webm)$/i));
let vCounter = 1;
for (const file of videoFiles) {
    const isWide = Math.random() > 0.5 ? ' wide' : '';
    newGrid += `
        <div class="portfolio-item video-item${isWide} reveal" data-category="video" data-video="images/${file}" tabindex="0" role="button" aria-label="Video ${vCounter}">
          <video src="images/${file}" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit ${String(vCounter).padStart(2, '0')}</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>`;
    vCounter++;
}

indexHtml = indexHtml.replace(/<div class="portfolio-grid" id="portfolio-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, `<div class="portfolio-grid" id="portfolio-grid">\n${newGrid}\n      </div>\n    </div>\n  </section>`);

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('Successfully updated grid and profile image!');
