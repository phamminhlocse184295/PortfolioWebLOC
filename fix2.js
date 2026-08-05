const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const pIds = [
  "1F4AeptbzzZST0wtnnjYfbSHV-PZ_RsT0", "1pa2heeprY2Gc8JvmJOf-noxr-cWPLGod", "1s_qNs392JSt97c1dChIEdrgdrAWeSLxt",
  "1CnQU2Jnlo1o7CDm0rDxwAkbjseNqrX-n", "1pmhk9AA5C8pFyxdGBHiuQx7rROy_TkhR", "1XvHAzgcrkEkH9ip-QvRDhHHSOY83yPpE",
  "1M8fW37UpfCM55-XES0JHzvsAEMyW_evz", "1Cq6f7TicCq0lIi32AD2vOYafxBRrjHas", "14AP-WQ3kAx5k6q-XZC3vsRQvKDqxmG4d",
  "14S0WaIP6KG9dDNc7v6rP6Pzuec4HuSXg", "1wLLmp6v_MfEoaYdJFBhIIJ9GKJDK9Brw", "1pvm1erXSS3Q4S6Oj_JWAGPoRKRH25FQj"
];

let p = 0;
content = content.replace(/data-src="https:\/\/drive\.google\.com\/uc\?export=view&id=[^"]*"/g, () => 'data-src="https://drive.google.com/uc?export=view&id=' + pIds[p++] + '"');

const iIds = [
  "1s2dAXDTdtGSY491WARCvg4oi5-goVICT", 
  "1F4AeptbzzZST0wtnnjYfbSHV-PZ_RsT0", "1pa2heeprY2Gc8JvmJOf-noxr-cWPLGod", "1s_qNs392JSt97c1dChIEdrgdrAWeSLxt",
  "1CnQU2Jnlo1o7CDm0rDxwAkbjseNqrX-n", "1pmhk9AA5C8pFyxdGBHiuQx7rROy_TkhR", "1XvHAzgcrkEkH9ip-QvRDhHHSOY83yPpE",
  "1M8fW37UpfCM55-XES0JHzvsAEMyW_evz", "1Cq6f7TicCq0lIi32AD2vOYafxBRrjHas", "14AP-WQ3kAx5k6q-XZC3vsRQvKDqxmG4d",
  "14S0WaIP6KG9dDNc7v6rP6Pzuec4HuSXg", "1wLLmp6v_MfEoaYdJFBhIIJ9GKJDK9Brw", "1pvm1erXSS3Q4S6Oj_JWAGPoRKRH25FQj",
  "1QIwT4k-yu0IoG8v6EYOV-pCvqrmTFZPt", "1NGyo251gtO2x3GRp0hBPrscJEOn4ckTJ", "1lfe2KAjo4MiTAmOm4cfL7rbW_Ge6i938",
  "1FJf8Jvv_P3dACb0PvwqNVzDtwde1pimX", "10LuA0h8MFFNWJgmjTQ4IOnMvp1Wnat2q"
];

let i = 0;
content = content.replace(/img src="https:\/\/drive\.google\.com\/uc\?export=view&id=[^"]*"/g, () => 'img src="https://drive.google.com/uc?export=view&id=' + iIds[i++] + '"');

fs.writeFileSync('index.html', content);
