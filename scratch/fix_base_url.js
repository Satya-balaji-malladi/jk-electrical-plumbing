import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/DELL/Desktop/FRELANCING PROJECTS/JK ELECTRONICS/src';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach((file) => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith('.astro')) {
      results.push(fullPath);
    }
  });
  return results;
}

const astroFiles = walk(dir);
let updatedCount = 0;

astroFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace `/${lang}/` with `${import.meta.env.BASE_URL}${lang}/`
  content = content.replace(/href=\{`\/\$\{lang\}/g, "href={`\\${import.meta.env.BASE_URL}${lang}");
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Done! Updated ${updatedCount} files.`);
