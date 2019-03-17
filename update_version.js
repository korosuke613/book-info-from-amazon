const fs = require('fs');
const path = require('path');
const file_path = path.resolve(__dirname, "app", "manifest.json");

const config = JSON.parse(
  fs.readFileSync(
    file_path
  )
);

const env = process.argv[2];
if(typeof env !== 'string'){
  process.on('exit', () => {
    process.exit(1);
  });
}
console.log(`next version is ${env}`);
config.version = env;

fs.writeFileSync(
  file_path,
  JSON.stringify(config,null,'  '),
  "utf-8"
);
