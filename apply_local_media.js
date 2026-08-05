const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// ========== ẢNH VỀ TÔI ==========
html = html.replace(
  /img src="[^"]*LOC[^"]*"|img src="https:\/\/drive\.google\.com\/thumbnail\?id=1s2dAXDTdtGSY491WARCvg4oi5-goVICT[^"]*"/,
  'img src="images/LOC.png"'
);

// ========== ẢNH PORTFOLIO - 7 ảnh unique, KHÔNG lặp ==========
const photos = [
  'images/Anhfixed.jpg',
  'images/Anhfixeddj.jpg',
  'images/mauNham3.1.jpg',
  'images/mauNham4.1.jpg',
  'images/mauNham5.1.jpg',
  'images/DamCuoiAnhTung-.png',
  'images/MeoMeo-.png',
];

let pi = 0;
html = html.replace(/(data-category="photo"\s+data-src=")[^"]*("[\s\S]*?<img\s+src=")[^"]*(")/g, (match, a, b, c) => {
  if (pi >= photos.length) {
    // Slot còn lại: ẩn đi, chờ mày export CR2 xong
    return match
      .replace(/data-src="[^"]*"/, 'data-src=""')
      .replace(/<img\s+src="[^"]*"/, '<img src="" style="display:none"');
  }
  const p = photos[pi++];
  return a + p + b + p + c;
});

// ========== VIDEO ==========
const videos = [
  { file: 'images/FinalVid1.mp4',                  poster: 'images/Anhfixed.jpg' },
  { file: 'images/LaamCafe12.mp4',                  poster: 'images/mauNham3.1.jpg' },
  { file: 'images/MatchaLatteVuGia1.mp4',           poster: 'images/mauNham4.1.jpg' },
  { file: 'images/TheSong3_19.12.2025.mp4',         poster: 'images/mauNham5.1.jpg' },
  { file: 'images/YeeTea5_11.12.2025.mp4',          poster: 'images/Anhfixeddj.jpg' },
];

let vi = 0;
html = html.replace(/(data-category="video"\s+data-video=")[^"]*("[\s\S]*?<img\s+src=")[^"]*(")/g, (match, a, b, c) => {
  if (vi >= videos.length) return match;
  const v = videos[vi++];
  return a + v.file + b + v.poster + c;
});

fs.writeFileSync('index.html', html);
console.log(`Photos mapped: ${pi}/7 | Videos mapped: ${vi}/5`);
