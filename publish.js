const webStore = require('chrome-webstore-upload')({
  extensionId: 'bkhaeipigknfhmbkcoingjepncjpaedl',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

webStore.fetchToken().then(token => {
  const target = 'default'; // optional. Can also be 'trustedTesters'
  webStore.publish(target, token).then(res => {
    if (res.status[0] === 'OK') console.log("publish success");
    else {
      console.log(res);
      process.on('exit', () => {
        process.exit(1);
      });
    }
  }).catch((err)=>{
    console.log('Currently being published.');
  });
});

