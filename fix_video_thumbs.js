const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const videos = [
  'images/FinalVid1.mp4',
  'images/LaamCafe12.mp4',
  'images/MatchaLatteVuGia1.mp4',
  'images/TheSong3_19.12.2025.mp4',
  'images/YeeTea5_11.12.2025.mp4',
  'images/BEHOMEMALLASMR3.mp4',
];

let vi = 0;

// Replace <img src="..."> inside video portfolio items with <video> tag so browser shows real frame
html = html.replace(
  /(data-category="video"\s+data-video=")(images\/[^"]+)("[\s\S]*?)(<img\s[^>]*>)/g,
  (match, a, videoFile, mid, imgTag) => {
    const v = videos[vi] || videoFile;
    vi++;
    // Replace data-video with correct local file
    const fixed = a + v + mid;
    // Replace <img> with <video> so real frame shows
    const videoEl = `<video src="${v}" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>`;
    return fixed + videoEl;
  }
);

fs.writeFileSync('index.html', html);
console.log(`Video thumbnails fixed: ${vi}`);
