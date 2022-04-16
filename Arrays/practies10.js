let ceaserCipher = (str) => {
  //Deciphered reference letters
  let decoded = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  //convert the string to lowercase
  str = str.toLowerCase();

  //decipher the code
  let decipher = "";
  for (let i = 0; i < str.length; i++) {
    decipher += decoded[str[i]];
  }

  //return the output
  return decipher.toUpperCase().replace(/UNDEFINED/g, " ");
};
let res = ceaserCipher("SERR YBIR?");
console.log(res);

let message = "SERR YBIR?";
const alpha =
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
let res2 = message.replace(
  /[a-z]/gi,
  (letter) => alpha[alpha.indexOf(letter) + 13]
);
console.log(res2);

function rot13(message) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
}
