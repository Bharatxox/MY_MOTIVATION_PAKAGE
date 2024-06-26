const chalk = require("chalk");

const motivation = [
  "padh le bsdk tera baap ameer nhi hai",
  "kuch krle saale kub tak dusro ko dekh ke jalta rahega",
  "kyu nhi ho rhi padhai kyu!!!! akhir kyu nhi ho pa rhi hai",
  "krliya scroll dekh ke reels hoogya kush ab chl padh le bsdk",
  "ek min hue nhi code kre hue thaak gya abi phone dedo 1 ghnate reel dekh lega kr chup chap kaam",
  "kya coder bandega be ek error aate he teri gand fhatt jaati hai krle le issko solve",
  "aagyi meri yaad aagya wapis motivation ke liye essa kr ek baar jaake appne sakal dekh maat dekh dekhne layak nhi hai kuch krle passe kama kuch bnn ja fir dekh tub aayega maaja",
];
function getMotivation() {
  const randomIndex = Math.floor(Math.random() * motivation.length);
  console.log(chalk.green(motivation[randomIndex]));
}
// getMotivation();

module.exports = { getMotivation };
