const webStore = require('chrome-webstore-upload')({
  extensionId: 'bkhaeipigknfhmbkcoingjepncjpaedl',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

const fs = require('fs');

webStore.fetchToken().then(token => {
  const myZipFile = fs.createReadStream('../app.zip');
  webStore.uploadExisting(myZipFile, token).then(res => {
    if (res.uploadState === 'SUCCESS') {
      console.log('upload success');
    } else {
      console.log(res);
      process.on('exit', () => {
        process.exit(1);
      });
    }
  });
});
