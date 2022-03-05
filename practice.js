const practice = () => {

  // 第１問
  const a = { a: 'a' };
  const b = { b: 'b' };

  const c = Object.assign(a, b);
  console.log(c);

  // 第２問
  const array = ['aa','bb','cc','dd','ee','ff','gg'];
  console.log(array.slice(3,-1));

  // 第３問
  let a3 = ['a','b'];
  a3.forEach((x) => {
    console.log(x);
  })
  // forEach()この()の中身がループされる
  
  // 第４問
  let a4 = ['a', 'b'];
  a4.forEach((x, index) => {
    console.log(index + x);
  });

  // 第５問
  let a5 = [1,2];
  console.log(Array.isArray(a5));

  // 第８問
  const o8 = {
    key: 'aa',
    key2: 'bb'
   }

   console.log(o8.key, o8.key2, Object.keys(o8));



  

  
}

window.addEventListener("load", practice);