const sharp = require('sharp');

async function check() {
    const file = process.argv[0]
    console.log(file);
    try {
        sharp('./4bd8be08-3b70-40ab-9945-8184cf11d20d.jpeg').toBuffer()
    } catch (error) {
        console.log(error);
    }
}


(async () => {
    await check();
  })();