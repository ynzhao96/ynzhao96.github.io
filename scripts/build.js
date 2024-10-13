const fs = require('fs');

function rename() {
    fs.rename('./dist', './docs', ()=>{});
}

rename();