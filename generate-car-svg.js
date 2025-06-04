const fs = require('fs');
const path = require('path');

const svg = `
<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" fill="#0d1117"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="24">
    🚗 Car is driving through your contributions!
  </text>
  <circle cx="100" cy="150" r="20" fill="#00ff00">
    <animate attributeName="cx" from="100" to="700" dur="5s" repeatCount="indefinite" />
  </circle>
  <circle cx="100" cy="150" r="10" fill="#000">
    <animate attributeName="cx" from="100" to="700" dur="5s" repeatCount="indefinite" />
  </circle>
</svg>
`;

const outputPath = path.join(__dirname, 'output', 'github-car-dark.svg');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, svg, 'utf8');

console.log('✅ Car contribution SVG generated!');
