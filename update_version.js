const fs = require('fs');
const path = require('path');
const file_path = path.resolve(__dirname, "app", "manifest.json");
const update = require('./version');


const main = ()=> {
  const version = update.load_version(process.argv[2]);
  if(version === false) {
    process.on('exit', () => {
      process.exit(1);
    });
  }
  console.log(`next version is v${version}`);
  const config = update.load_JSON(file_path);
  config.version = version;

  fs.writeFileSync(
    file_path,
    JSON.stringify(config, null, '  '),
    "utf-8"
  );
};

main();

