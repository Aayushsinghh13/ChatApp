const fs = require('fs');
const path = require('path');

function check(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      check(p);
    } else if (p.endsWith('.js') || p.endsWith('.jsx')) {
      const content = fs.readFileSync(p, 'utf8');
      const regex = /from\s+['"](\.[^'"]+)['"]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        const importPath = match[1];
        let exts = ['', '.js', '.jsx', '/index.js', '/index.jsx'];
        let found = false;
        
        for(let ext of exts) {
            const fullPath = path.resolve(path.dirname(p), importPath + ext);
            if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
                found = true;
                const baseName = path.basename(fullPath);
                const actualFiles = fs.readdirSync(path.dirname(fullPath));
                if (!actualFiles.includes(baseName)) {
                    console.log('CASE MISMATCH in', p, '->', importPath, 'Expected one of', actualFiles);
                }
                break;
            }
        }
        if (!found) {
            console.log('NOT FOUND in', p, '->', importPath);
        }
      }
    }
  }
}

check('d:/ChatApp/ChatApp/frontend/src');
