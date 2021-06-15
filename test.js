const fn = require('./dist/main');

(async () => {
  await fn();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
