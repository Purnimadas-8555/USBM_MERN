const os = require("os")
 

// // custom modules
console.log(os);
 console.log(os.homedir());//c:Users\purnima
 console.log(os.hostname());// LAPTOP-15NGAOO3
 console.log(os.platform());//win32
 console.log(os.release());//10.0.22631
 console.log(os.userInfo());//[Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'purnima',
//     homedir: 'C:\\Users\\purnima',
//     shell: null
//   }
 
console.log(os.userInfo().username);//purnima
console.log(os.totalmem());//8245334016
console.log(os.freemem());//1690673152