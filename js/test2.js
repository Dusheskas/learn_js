/* */

const students = [
   "Peter",
   "Andrew",
   "Ann",
   "Mark",
   "Josh",
   "Sandra",
   "Cris",
   "Bernard",
   "Takesi",
   "Sam",
];

function sortStudentsByGroups(arr) {
   let resArr = [];
   arr.sort(); // Сортируем массив по алфавиту

   for (let i = 0; i < 3; i++) {
      resArr.push(arr.splice(0, 3));
   }
   resArr.push(`Оставшиеся студенты: ${arr.length ? arr.join(", ") : "-"}`);

   return resArr;
}
console.log(sortStudentsByGroups(students));
