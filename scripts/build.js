import fs from 'fs';

function rename() {
    if (fs.existsSync('./docs')) {
        fs.rmSync('./docs', { recursive: true, force: true });
    }
    fs.renameSync('./dist', './docs', ()=>{});
}

rename();