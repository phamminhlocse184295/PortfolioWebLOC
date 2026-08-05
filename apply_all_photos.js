const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// All available photos (unique, no CR2, no LOC, no video posters)
const photos = [
  'images/Anhfixed.jpg',
  'images/Anhfixeddj.jpg',
  'images/mauNham3.1.jpg',
  'images/mauNham4.1.jpg',
  'images/mauNham5.1.jpg',
  'images/DamCuoiAnhTung-.png',
  'images/MeoMeo-.png',
  'images/IMG_0079.jpg',
  'images/IMG_0086.jpg',
  'images/IMG_0093.jpg',
  'images/IMG_0101.jpg',
  'images/IMG_0105.jpg',
];

let pi = 0;
html = html.replace(/(data-category="photo"\s+data-src=")[^"]*("[\s\S]*?<img\s+src=")[^"]*(")/g, (match, a, b, c) => {
  if (pi >= photos.length) return match;
  const p = photos[pi++];
  return a + p + b + p + c;
});

fs.writeFileSync('index.html', html);
console.log(`Mapped ${pi} photos into portfolio grid.`);
