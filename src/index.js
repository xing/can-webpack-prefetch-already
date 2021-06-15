module.exports = async () => {
  const { hello } = await import(/* webpackPrefetch: true */ './text');

  console.log(hello());
};
