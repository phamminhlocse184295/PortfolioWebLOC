const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newGrid = `      <div class="portfolio-grid" id="portfolio-grid">

        <!-- PHOTOS -->
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Anhfixed.jpg" tabindex="0" role="button" aria-label="Photo 1">
          <img src="images/Anhfixed.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series I</h3></div>
        </div>
        <div class="portfolio-item wide reveal" data-category="photo" data-src="images/DamCuoiAnhTung-.png" tabindex="0" role="button" aria-label="Photo 2">
          <img src="images/DamCuoiAnhTung-.png" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series II</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Anhfixeddj.jpg" tabindex="0" role="button" aria-label="Photo 3">
          <img src="images/Anhfixeddj.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series III</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/mauNham3.1.jpg" tabindex="0" role="button" aria-label="Photo 4">
          <img src="images/mauNham3.1.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series IV</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/mauNham4.1.jpg" tabindex="0" role="button" aria-label="Photo 5">
          <img src="images/mauNham4.1.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series V</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/mauNham5.1.jpg" tabindex="0" role="button" aria-label="Photo 6">
          <img src="images/mauNham5.1.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series VI</h3></div>
        </div>
        <div class="portfolio-item wide reveal" data-category="photo" data-src="images/MeoMeo-.png" tabindex="0" role="button" aria-label="Photo 7">
          <img src="images/MeoMeo-.png" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series VII</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_9453.jpg" tabindex="0" role="button" aria-label="Photo 8">
          <img src="images/IMG_9453.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series VIII</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0079.jpg" tabindex="0" role="button" aria-label="Photo 9">
          <img src="images/IMG_0079.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series IX</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0086.jpg" tabindex="0" role="button" aria-label="Photo 10">
          <img src="images/IMG_0086.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series X</h3></div>
        </div>
        <div class="portfolio-item wide reveal" data-category="photo" data-src="images/IMG_0093.jpg" tabindex="0" role="button" aria-label="Photo 11">
          <img src="images/IMG_0093.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XI</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0101.jpg" tabindex="0" role="button" aria-label="Photo 12">
          <img src="images/IMG_0101.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XII</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0105.jpg" tabindex="0" role="button" aria-label="Photo 13">
          <img src="images/IMG_0105.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XIII</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0106.jpg" tabindex="0" role="button" aria-label="Photo 14">
          <img src="images/IMG_0106.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XIV</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_0117.jpg" tabindex="0" role="button" aria-label="Photo 15">
          <img src="images/IMG_0117.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XV</h3></div>
        </div>
        <div class="portfolio-item wide reveal" data-category="photo" data-src="images/Koi1.jpg" tabindex="0" role="button" aria-label="Photo 16">
          <img src="images/Koi1.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi I</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Koi2.jpg" tabindex="0" role="button" aria-label="Photo 17">
          <img src="images/Koi2.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi II</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Koi3.jpg" tabindex="0" role="button" aria-label="Photo 18">
          <img src="images/Koi3.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi III</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Koi4.jpg" tabindex="0" role="button" aria-label="Photo 19">
          <img src="images/Koi4.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi IV</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/Koi5.jpg" tabindex="0" role="button" aria-label="Photo 20">
          <img src="images/Koi5.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi V</h3></div>
        </div>
        <div class="portfolio-item wide reveal" data-category="photo" data-src="images/Koi6.jpg" tabindex="0" role="button" aria-label="Photo 21">
          <img src="images/Koi6.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Koi VI</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_9953.jpg" tabindex="0" role="button" aria-label="Photo 22">
          <img src="images/IMG_9953.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XVI</h3></div>
        </div>
        <div class="portfolio-item reveal" data-category="photo" data-src="images/IMG_9973.jpg" tabindex="0" role="button" aria-label="Photo 23">
          <img src="images/IMG_9973.jpg" alt="Photography by Phạm Minh Lộc" loading="eager" />
          <div class="portfolio-overlay"><span class="portfolio-tag">Photography</span><h3 class="portfolio-name">Series XVII</h3></div>
        </div>

        <!-- VIDEOS -->
        <div class="portfolio-item video-item wide reveal" data-category="video" data-video="images/FinalVid1.mp4" tabindex="0" role="button" aria-label="Video 1">
          <video src="images/FinalVid1.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 01</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
        <div class="portfolio-item video-item reveal" data-category="video" data-video="images/LaamCafe12.mp4" tabindex="0" role="button" aria-label="Video 2">
          <video src="images/LaamCafe12.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 02</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
        <div class="portfolio-item video-item reveal" data-category="video" data-video="images/MatchaLatteVuGia1.mp4" tabindex="0" role="button" aria-label="Video 3">
          <video src="images/MatchaLatteVuGia1.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 03</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
        <div class="portfolio-item video-item wide reveal" data-category="video" data-video="images/TheSong3_19.12.2025.mp4" tabindex="0" role="button" aria-label="Video 4">
          <video src="images/TheSong3_19.12.2025.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 04</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
        <div class="portfolio-item video-item reveal" data-category="video" data-video="images/YeeTea5_11.12.2025.mp4" tabindex="0" role="button" aria-label="Video 5">
          <video src="images/YeeTea5_11.12.2025.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 05</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>
        <div class="portfolio-item video-item reveal" data-category="video" data-video="images/BEHOMEMALLASMR3.mp4" tabindex="0" role="button" aria-label="Video 6">
          <video src="images/BEHOMEMALLASMR3.mp4" preload="metadata" muted playsinline style="width:100%;height:100%;object-fit:cover;pointer-events:none;" tabindex="-1"></video>
          <div class="portfolio-overlay"><span class="portfolio-tag">Video Edit</span><h3 class="portfolio-name">Edit 06</h3></div>
          <div class="portfolio-video-btn" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        </div>

      </div>
    </div>
  </section>`;

// Replace everything between <!-- PORTFOLIO --> section start and <!-- MY PROCESS -->
html = html.replace(
  /(<section id="portfolio"[^>]*>[\s\S]*?<div class="section-container">[\s\S]*?<\/div>\s*<\/div>\s*<div class="portfolio-filter[^>]*>[\s\S]*?<\/div>\s*)[\s\S]*?(<\/section>\s*\n\s*<!--\s*MY PROCESS)/,
  (match, header, closing) => {
    return header + newGrid.replace(/      <div class="portfolio-grid"[\s\S]*$/, '') + '\n\n' + newGrid.match(/<div class="portfolio-grid"[\s\S]*/)[0] + '\n' + closing;
  }
);

// Simpler approach: just find and replace the portfolio-grid div entirely
html = html.replace(
  /<div class="portfolio-grid" id="portfolio-grid">[\s\S]*?<\/div>\s*\n\s*<\/div>\s*\n\s*<\/section>/,
  newGrid + '\n    </div>\n  </section>'
);

fs.writeFileSync('index.html', html);
console.log('Done! Lines:', html.split('\n').length);
