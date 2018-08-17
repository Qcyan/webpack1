// module.exports = function say() {
//   console.log('Hello world AAA')
// }

//webpack默认不支持转码es6，但是import export这两个语法却单独支持。所以我们可以改写前面的模块化写法
// export default function say() {
//   console.log('hello world ');
// }

export default function getData() {
  return new Promise((resolve, reject) => {
      resolve('ok'); //页面会输出ok
  })
}