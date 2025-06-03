function sum(x, y) {
    return x + y;
}
var a = 10;
var b = 20;
console.log(sum(a, b));
//MUST1
//数値の配列から最大値を取得する関数を作成してください。
//-10個以上の要素を持つ数値型の配列を定義してください
//-数値型の配列を引数に取り、その最大値の数値型を返す関数を定義してください。
//関数名: getMax
//引数の数とそのデータ型:  1 numberArray
//返り値のデータ型: number
//numArrayには数値型しかはいらない。
//返り値は数値型
function getMax(numArray) {
    //...で配列を展開して
    //Math.max（）で最大値をさがしてもらう
    return Math.max.apply(Math, numArray);
}
console.log(getMax([1, 5, 3, 9, 2])); // -> 9
console.log(getMax([-10, -5, -1])); // -> -1
console.log(getMax([100])); // -> 100
//MUST2
//- 数値型を引数に取り、3の倍数のときには `Fizz` 、5の倍数のときには `Buzz` 、3と5の倍数のときには `FizzBuzz` 、それ以外のときには元の数値を返す関数を定義してください。
//- 上記の関数を使って、1～100までの数値の返り値を順番にコンソールに出力してください。
//関数名: fizzBuzz
//引数の数とそのデータ型: 1 number
//返り値のデータ型: string
//初期化式: 1から始める　　i=1
//条件式: １００まで　 i <= 100
//変化式: カウントアップ　 i++
function fizzBuzz(num) {
    //3と５で割り切れるときFizzBuzz
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
        //3で割り切れるときFizz
    }
    else if (num % 3 === 0) {
        return "Fizz";
        //5で割り切れるときBuzz
    }
    else if (num % 5 === 0) {
        return "Buzz";
        //それ以外はその数字
    }
    else {
        return "".concat(num);
    }
}
for (var i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
//MUST3
// 逆さ文字列
// - 文字列を引数に取り、受け取った文字列を逆順にして返す関数を作成してください。
// - `baseball` という引数を与えたとき `llabesab` という文字列が返ることを確認してください。
//関数名: backward
//引数の数とそのデータ型: 1 string
//返り値のデータ型: string(backward)
function backward(word) {
    //メソッドチェーンはじめるよー
    //splitで単語を1文字ずつバラバラにする （間には何も入れたくないから””の中は空っぽ）
    //reverseで逆からに並べ直す
    //joinでくっつける（間には何も入れたくないから””の中は空っぽ）
    return word.split("").reverse().join("");
}
console.log(backward("baseball"));
//MUST4
// 文字列分割
//- 「任意の文章」と「区切り文字」を引数にとり、任意の文章を区切り文字で区切った配列を返す関数を作成してください。
//- `'apple,orange,strawberry'` という文章と `,` という区切り文字を与えたとき `['apple', 'orange', 'strawberry']` という配列が返ることを確認してください。
//関数名: chop
//引数の数とそのデータ型: 1 string
//返り値のデータ型: array(chopped)
function chop(text) {
    return text.split(",");
}
console.log(chop('apple,orange,strawberry'));
