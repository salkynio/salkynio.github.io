//CRUD
//C => [...studenst, newStudent]
//R => map(obj =>JSX.Element)       //преобразуем исходный массив - берем  каждый обьект и на базе этого обьекта  формируем jsx-элемент  - и метод мар под катпотом автоматически обеспечить перебор исходного  массива обьектов -преобразование каждого элемента в jsx-элемент и формирование нового масива jsx элементов - таким образом получим новый массив
//U => map (condition ? obj => {...obj, prop:newValue} : obj)  //выполняем преобразование  условное - на основании условия мы выбираем какой то один обьект  если совпало то его мы видоизменяем , если нет то это обьект оставляем.
//D => filter(condition)

const students = [
  { name: "Salkyn", age: 27, isMarried: false, scores: 100 },

  { name: "Tolkun", age: 27, isMarried: true, scores: 90 },

  { name: "Samat", age: 36, isMarried: true, scores: 70 },
];

// const getNameFN = (array) =>{
//     const result =[]
//     const elMapFn = (st) => st.name  // мы хотим из отдельного элемента взять имя студента
//     for (let i = 0; i <array.length; i++){ // запускаем цикл
//        const newValue =elMapFn(array[i]) // для каждого элемента исходного массива будем вызывать ф-ю преобразование
//        result[i] = newValue // в новый массив по этому индексу хотим положить  new Value
//     }
//  return result
// }
// console.log(getNameFN(studenst)) //вызываем функцию - работает аналогично методу map

// console.log (studenst.map((st)=>st.name)) //

//создаем ф-ю которая возвратить массив студентов с именами и баллами

// const getSimpleSt = (array)  =>{
//     const result = []
//     const elMapStName = (st) => ({name:st.name, scores:st.scores})
//     for (i = 0; i < array.length; i++){
//      const newValue =elMapStName(array[i])
//        result[i] =newValue
//     }
//     return result
// }
// console.log(getSimpleSt(students))

// const selfMadeMap =(array,elMapStName) =>{
//     const result =[]
//     for (i = 0; i < array.length; i++){
//         const newValue =elMapStName(array[i])
//           result[i] =newValue
//        }
//        return result
// }

// console.log(students.map((st)=>({name:st.name, scores:st.scores})))

// console.log(selfMadeMap(students,(st)=>({name:st.name, scores:st.scores})))

// const selfMadeFilter = (array, conditionFn) =>{
//     const result = [] // создает новый массив
//     for (i = 0; i < array.length; i++){// перебирает элементы массива
//        if(conditionFn(array[i]) === true) {// в новом массиве будут лежать элементы исходного массива которые удовлетворяют условию т.е там ничего не будет меняться, а просто будут элменеты которые  прошли это условия
//         result.push(array[i])
//        }
//      }

//     return result
// }

// console.log(students.filter((el) => el.scores>=100))

const sm = window.document.getElementById("small");

const handler1 = () => {
  alert("Click!");
};
sm.onclick = handler1; //старый метод
sm.onclick = null; // обнуляем метод

const handler2 = () => {
  alert("Yo!"); // если мы создадим еще одну ф-ю и переназначим на sm
};
sm.onclick = handler2;
sm.onclick = handler1; // отображается только yo потому что sm.onclick = может содержать только одно значение == в этом смысле считается устаревшим.
sm.onclick = null;
//как нам быть если мы хотим использовать несколько обработчиков событий
//метод HTML элемента- добавить слушателя события-addEventListener -можно назначать несколько обработчиков событий
sm.addEventListener("click", handler1);
sm.addEventListener("click", handler2); // передавать  ссылку функцию
sm.addEventListener("click", () => alert("hey")); // непостредственно литерал анонимной ф-ю //456

// снятие обработчиков
sm.removeEventListener("click", handler1);
sm.removeEventListener("click", handler2);
sm.removeEventListener("click", () => alert("hey")); //457 лежит в другой ячейке  -доступа не имеем  и сотвественно удалить не сможем - только при присвоении литерала ф-ю в переменную сможем  в дальнейшем удалить

sm.onclick = null;
const handler4 = (e) => console.log(e.target);
sm.addEventListener("click", handler4);

// все клики которые происходят на странице ловят body
const md = document.getElementById("medium");
md.addEventListener("click", handler4);


 