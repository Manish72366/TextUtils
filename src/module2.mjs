// import ele from './module1.mjs' // importing ele from module1 file.
import ele , {a,b,d} from './module1.mjs'
// import ele , {a,b,d} from './module1.mjs' so ele is by default but not other so you can put any name in place of ele but {a,b,d} are not default so they must have same name as what we are exporting.
console.log(ele);
console.log(a + " " +  b + " " + d);