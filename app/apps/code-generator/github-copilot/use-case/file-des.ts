/*
* 对 js 字符串的增删改查 函数
*/

function append(str: string, appendStr: string) {
  return str + appendStr;
}

function prepend(str: string, prependStr: string) {
  return prependStr + str;
}

function insert(str: string, insertStr: string, index: number) {
  return str.slice(0, index) + insertStr + str.slice(index);
}