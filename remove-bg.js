const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (file === 'Hero.tsx') continue; // Don't touch Hero background
      if (file === 'Navbar.tsx') continue; // Don't touch Navbar
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/\bbg-black\b/g, 'bg-transparent');
      content = content.replace(/\bbg-primary-dark\b/g, 'bg-transparent');
      content = content.replace(/\bbg-\[\#050B14\]\b/g, 'bg-transparent');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('./src/components');
console.log('Done replacing backgrounds!');
