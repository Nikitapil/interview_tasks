// Что выводится в консоль?

const obj = {
  value: '42',
  print () {
    function type() {
      return typeof this.value;
    }
    console.log(`${this.value} is ${type()}`);
  }
}


obj.print(); // ?

// Ответ 42 is undefined