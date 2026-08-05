const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Photo items - restore Google Drive links
const photoItems = [
  { src: 'https://drive.google.com/thumbnail?id=1F4AeptbzzZST0wtnnjYfbSHV-PZ_RsT0&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1F4AeptbzzZST0wtnnjYfbSHV-PZ_RsT0&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1pa2heeprY2Gc8JvmJOf-noxr-cWPLGod&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1pa2heeprY2Gc8JvmJOf-noxr-cWPLGod&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1s_qNs392JSt97c1dChIEdrgdrAWeSLxt&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1s_qNs392JSt97c1dChIEdrgdrAWeSLxt&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1CnQU2Jnlo1o7CDm0rDxwAkbjseNqrX-n&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1CnQU2Jnlo1o7CDm0rDxwAkbjseNqrX-n&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1pmhk9AA5C8pFyxdGBHiuQx7rROy_TkhR&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1pmhk9AA5C8pFyxdGBHiuQx7rROy_TkhR&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1XvHAzgcrkEkH9ip-QvRDhHHSOY83yPpE&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1XvHAzgcrkEkH9ip-QvRDhHHSOY83yPpE&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1M8fW37UpfCM55-XES0JHzvsAEMyW_evz&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1M8fW37UpfCM55-XES0JHzvsAEMyW_evz&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1Cq6f7TicCq0lIi32AD2vOYafxBRrjHas&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1Cq6f7TicCq0lIi32AD2vOYafxBRrjHas&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=14AP-WQ3kAx5k6q-XZC3vsRQvKDqxmG4d&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=14AP-WQ3kAx5k6q-XZC3vsRQvKDqxmG4d&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=14S0WaIP6KG9dDNc7v6rP6Pzuec4HuSXg&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=14S0WaIP6KG9dDNc7v6rP6Pzuec4HuSXg&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1wLLmp6v_MfEoaYdJFBhIIJ9GKJDK9Brw&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1wLLmp6v_MfEoaYdJFBhIIJ9GKJDK9Brw&sz=w1200' },
  { src: 'https://drive.google.com/thumbnail?id=1pvm1erXSS3Q4S6Oj_JWAGPoRKRH25FQj&sz=w800', lightbox: 'https://drive.google.com/thumbnail?id=1pvm1erXSS3Q4S6Oj_JWAGPoRKRH25FQj&sz=w1200' },
];

const videoItems = [
  { thumb: 'https://drive.google.com/thumbnail?id=1QIwT4k-yu0IoG8v6EYOV-pCvqrmTFZPt&sz=w800', preview: 'https://drive.google.com/file/d/1QIwT4k-yu0IoG8v6EYOV-pCvqrmTFZPt/preview' },
  { thumb: 'https://drive.google.com/thumbnail?id=1NGyo251gtO2x3GRp0hBPrscJEOn4ckTJ&sz=w800', preview: 'https://drive.google.com/file/d/1NGyo251gtO2x3GRp0hBPrscJEOn4ckTJ/preview' },
  { thumb: 'https://drive.google.com/thumbnail?id=1lfe2KAjo4MiTAmOm4cfL7rbW_Ge6i938&sz=w800', preview: 'https://drive.google.com/file/d/1lfe2KAjo4MiTAmOm4cfL7rbW_Ge6i938/preview' },
  { thumb: 'https://drive.google.com/thumbnail?id=1FJf8Jvv_P3dACb0PvwqNVzDtwde1pimX&sz=w800', preview: 'https://drive.google.com/file/d/1FJf8Jvv_P3dACb0PvwqNVzDtwde1pimX/preview' },
  { thumb: 'https://drive.google.com/thumbnail?id=10LuA0h8MFFNWJgmjTQ4IOnMvp1Wnat2q&sz=w800', preview: 'https://drive.google.com/file/d/10LuA0h8MFFNWJgmjTQ4IOnMvp1Wnat2q/preview' },
];

let pi = 0;
html = html.replace(/(data-category="photo" data-src=")[^"]*("[\s\S]*?<img src=")[^"]*(")/g, (match, a, b, c) => {
  if (pi >= photoItems.length) return match;
  const item = photoItems[pi++];
  return a + item.lightbox + b + item.src + c;
});

let vi = 0;
html = html.replace(/(data-category="video" data-video=")[^"]*("[\s\S]*?<img src=")[^"]*(")/g, (match, a, b, c) => {
  if (vi >= videoItems.length) return match;
  const item = videoItems[vi++];
  return a + item.preview + b + item.thumb + c;
});

fs.writeFileSync('index.html', html);
console.log(`Restored ${pi} photos and ${vi} videos.`);
