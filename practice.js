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

   // 第９問
   let a9 = ['a', 'b', 'c'];
   let word = ''
   a9.forEach(function(x){
     word += x;
   });
   console.log(word);

   console.log(a9.join('')); // joinメソッドを使った方が簡単に

   // 第１０問
   x = 43
  let y = 3

  delete x;
  // console.log(x); エラー
  delete y;
  console.log(y);

  // 第１１問
  // let a11 =[
  //   {id:1,name:'morita'},
  //   {id:2,name:'kenji'},
  //   {id:4,name:'uro'},
  //   {id:3,name:'ken'}
  //   ];

  // a11.sort(function(a, b){
  //   return a.id > b.id;
  // });
  // console.log(a11);

  let arry =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
  ];
  console.log(
    arry.sort(function(a,b){
    return  b.id - a.id // ここは比較をさせ、正の値になるので、bに入っていた要素が若いインデックス番号になる
    })
  );
  console.log(arry); // sortメソッドは元の配列にも影響を与える

  // 第１２問
  let a12 = 5;
  let b12 = 7;

  a12 = 1;
  console.log(a12, b12);

  // 第１３問
  // const next = () => {
  //   let a13 = 0;
  //   return function(){
  //     return a13 += 1 ;
  //   }
  // }; // この関数をそのまま返してしまうと、 a13 += 1を返すことになるため、一度定数にこの値を入れる必要がある

  const setUp = function(){
    let count = 0;
    return function(){
  return (count += 1);
    }
  };
  const next = setUp();

  console.log(next());
  console.log(next());
  console.log(next());

  // 第１４問
  // const fun = (a, b, c) => {
  //   return [a, b, c];
  // }
  // const fun = (...arg) => {
  //   return arg;
  // }
  function fun(){
    return arguments[0]; // argumentsはJS内で使える配列のようなオブジェクト
   }
   // 上記３つであればどれでも可能

  console.log(fun(1,2,3));

  
}

window.addEventListener("load", practice);