// [Bài tập] Luyện tập vòng lặp
// Mục tiêu
// Luyện tập sử dụng vòng lặp for, while, do-while, vòng lặp

// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100.
// Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// cách 1.
// for (let i = 0; i <= 100; i = i + 1){
//     console.log(i);
// }
// Cách 2:
//  let i = 0;
//  let state = true;
//  while (state){
//     i = i + 3;
//     console.log(i);
//     if (i === 99) {
//         state = alert("Đã hoàn thành");
//     }
// }
// Bài 2: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let n1 = 0, n2 = 1;
// for (let i = 1; i <= 20; i = i + 1) {
//     console.log(i)
//     fibonacci = n1 + n2;
//     n1 = n2;
//     n2 = fibonacci;
// }

// Bài 3: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
let i = 0;
let state = true;
let n1 = 0, n2 = 1;
let d = "";
while (state){
    i = i + 1;
    fobi = n1 + n2;
        n1 = n2;
        n2 = fobi;
    if(d % 5 === 0){
        d = fobi;
    }
    break;
    console.log(`${d} là số đầu tiên trong dãy fibonacci chia hết cho 5`);
}

// Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.


// Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

// Bài 6: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

// Bài 7: Tính giai thừa của một số nguyên dương
