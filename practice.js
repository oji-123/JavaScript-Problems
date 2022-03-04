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

  
}

window.addEventListener("load", practice);