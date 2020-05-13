import '@/index.less';
import '@/index.css';
import axios from 'axios';

axios.get('/user')
  .then((res) => {
    console.log(res.data);
  });

class Person {
  constructor (name) {
    this.name = name;
  }
}

let p = new Person('lisi');
console.log(p.name);