module.exports.load_JSON = (file_path) => {
  return JSON.parse(
    fs.readFileSync(
      file_path
    )
  );
};

module.exports.load_version = (env) => {
  if (typeof env !== 'string') {
    return false;
  }
  return env.replace('v', '');
};
