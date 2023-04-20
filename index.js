const sharp = require('sharp');

async function check() {
    const file = process.argv[2]
    console.log(file);
    try {
        sharp(file).toBuffer()
    } catch (error) {
        console.log(error);
    }
}


(async () => {
    await check();
  })();