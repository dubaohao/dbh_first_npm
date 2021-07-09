function sum(a, b) {
  return a + b
}
//全角转半角
function toCDB(str) {
  let tmp = ''
  for ( let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) == 12288) {
          tmp += String.fromCharCode(str.charCodeAt(i) - 12256)
          continue
      }
      if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
          tmp += String.fromCharCode(str.charCodeAt(i) - 65248)
      } else {
          tmp += String.fromCharCode(str.charCodeAt(i))
      }
  }
  return tmp
}

export const Utils = {
  toCDB,
  sum,
}