import fs from 'fs';
import { resolve, join, basename, dirname } from 'path';
const __dirname = import.meta.dirname;

function move() {
    const htmlDir = resolve(__dirname, '../docs/html');
    const docsDir = resolve(__dirname, '../docs');
    try {
        fs.readdirSync(htmlDir).forEach(h => {
            const source = join(htmlDir, h);
            const destination = join(docsDir, h);
            fs.copyFile(source, destination, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.rmSync(htmlDir, { recursive: true, force: true });
                }
            })
        })
    } catch (exception) {
        console.log(exception);
    }
    
}

move();