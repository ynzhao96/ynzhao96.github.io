import fs from 'fs';

function rename() {
    fs.rename('./dist', './docs', ()=>{});
}

rename();