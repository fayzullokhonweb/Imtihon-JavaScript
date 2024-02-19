// Masalalar v-2

//

// 1.# Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.

///
//

// 2 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing. getSum3(15) => 45

// function getSum3(N) {
//   let counter = [];
//   let allCounter = [];
//   for (let i = 2; i <= N; i++) {
//     if (i % 3 == 0) {
//       counter.push(i);
//     }
//   }
//   console.log(counter);
//   counter.forEach((count) => {
//   });
//   console.log(allCounter);
// }

// getSum3(15);
//

// 3.n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S = n^2 +(n+1)^2+(n+2)^2 + ... (2*n)^2

// let n = 2;
// let result = 0;
// for (let i = 0; i <= n; i++) {
//   result += (n + i) ** 2;
// }
// console.log(result);
//

// 4.Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// // Input:
// [
// 	"Abdulaziz",
// 	"Safarmurod",
// 	"O’rol",
// 	"Jahongir"
// ]

// // Output:
// {
// 	"Abdulaziz": 9,
// 	"Safarmurod": 10,
// 	"O’rol": 5,
// 	"Jahongir": 8
// }

// const array = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// const object = {};
// for (let i = 0; i < array.length; i++) {
//   const key = array[i];
//   const value = key.length;
//   object[key] = value;
// }
// console.log(object);

//

// 5.Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.
// Input:
// let n = 3
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// // Output:
// const res = {
// 	a: 6,
// 	b: 9,
// 	c: 12,
// 	d: 18
// }

// function getMultipleValues(n) {}
// getMultipleValues(3);

// 6.n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

// const arr = [1, 5, 2, 3, 9, 23, 7, 8, 5, 4, 10];
// arr.sort((a, b) => a - b);
// arr.fill("0", 1, arr.length - 1);
// console.log(arr);

// 7.Satrni bo'sh joy bor yoki yo'qligini tekshiring.(split, some)
// const text = "Men Abdulaziz Programmerman";

// const allSplit = text.split(" ").some((word) => {
//   if (word.includes("")) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });
///

///

// 8.Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce)

// const pupils = [
//   {
//     name: "Elbek",
//     percent: 95,
//   },
//   {
//     name: "Zafar",
//     percent: 78,
//   },
//   {
//     name: "Aziz",
//     percent: 83,
//   },
//   {
//     name: "Jasur",
//     percent: 88,
//   },
//   {
//     name: "Bobur",
//     percent: 66,
//   },
//   {
//     name: "Kamron",
//     percent: 75,
//   },
// ];

// const result = pupils.reduce(
//   (acc, curVal) => {
//     if (curVal.percent >= 85) {
//       acc.true++;
//     } else {
//       acc.false++;
//     }
//     return acc;
//   },
//   { true: 0, false: 0 }
// );

// console.log("Imtihondan o'tganlar soni:", result.true);
// console.log("Imtihondan o'tmaganlar soni:", result.false);

//

// 9.N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)

// const arr = [1, 5, 2, 7, 3, 2, 5, 9, 3, 7, 10, 1];

// const result = arr.reduce((acc, curVal) => {
//   if (!acc.includes(curVal)) {
//     acc.push(curVal);
//   }
//   return acc;
// }, []);

// const allResult = result.sort((a, b) => a - b);

// console.log(allResult);

//

//10.Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)
// Input:
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// const allAnimal = animals.reduce((acc, curVal) => {
//   acc[curVal] = (acc[curVal] || 0) + 1;
//   return acc;
// }, {});

// console.log(allAnimal);
