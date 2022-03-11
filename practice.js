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

  // 第１５問
  const a15 = ['a1','a2','a3','a4','a5'];
  console.log(a15.splice(0, 3,"red", "green", "yellow"));
  console.log(a15);

  // 第１６問
  const a16 = ['a1','a2','a3','a4','a5'];
  console.log(a16.slice(2,5));

  // 第１７問
  const a17 = ['a1','a2','a3','a4','a5'];
  console.log(a17.join("/").split("/"));
  console.log('a/b/c/d/e'.split("/")) // split演算子は()内で指定した文字列で区分し、配列を返す演算子

  // 第１８問
  const a18 = ['おはよう','こんにちは','おやすみなさい'];
  const greeting = a18[(Math.floor(Math.random() * a18.length))]; // Math.floorは小数を一番ちかい値よりも大きな数字を返す
  console.log(greeting);

  // 第１９問
  // let a19 = Object.create({p: 1}); これでは不可。Object.create()メソッドの第一引数は継承するプロパティを決めるだけなので、
  // オブジェクトの中の値を決めることはできない。
  // また、値(value)を決める時は、valueの指定が必要になる。
  let a19 = Object.create({}, {p: {value: 1}});
  console.log(a19);

  // 第２０問
  function Who(name){
    this.name = name;
   };
   Who.prototype.getName = function(){
    console.log('Myname is ' + this.name);
   };
   let o20 = new Who('morita');
   o20.getName()

   // 第２１問
   let a21 = ['e','a','k','B','c'];
   console.log(a21.sort()); // => [B, a, c, e, k]
   // 大文字からソートされる。

   // 第２２問
    let a22 = ['e','a','k','B','c'];
    a22.sort(function(a,b){
    return a.toUpperCase() > b.toUpperCase() ? 1 : -1 ;
    });
    // toUpperCase()メソッドは大文字で文字列を返す。二つの文字列を大文字で比較し、trueであれば１を、falseであれば−１を返す。
    //sortメソッドは正の数が返ってきた場合はそのままにし、負の数が返ってきた場合は順番を逆にする。
    console.log(a22);

    // 第２３問
    let a23 = [20,100,3,35,0];
    console.log(a23.sort((a, b) => {
      return b - a; 
    }));

    // 第２４問
    let a24 = Number("10");  // 数値型へ変換
    console.log(typeof a24); // a24の型を調べる
    console.log(isNaN(a24)); // 
    console.log(a24.toString()); // 文字列へ変換
    
}

window.addEventListener("load", practice);