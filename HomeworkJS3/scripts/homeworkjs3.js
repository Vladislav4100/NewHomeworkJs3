'use strict';
/*1. На многомерный массив
Дан массив:
    [
        [23, 56, 75, -90, 123],
        [17, 0, -6429, -122],
        [19, 86, 55, -3, 900, 0, 0],
        [4, 9, -2]
    ]
Увеличить значение каждого элемента массива на 10
*/
let array= [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
for (let i=0;i<array.length;i++){
    for (let j=0;j<array[i].length;j++){
        array[i][j]+=10;
    }
}
console.log(array);

/*2. Создать массив из целых чисел, заполнить массив рандомными значениями. Размер массива - 7.
Поменять элементы с максимальным и минимальным значениями местами.
*/
let max=0, min=0;
let array1=[];
array1.length=7;
    for(let i=0;i<array1.length;i++){
         array1[i]=parseInt(Math.random()*19974);
    }
console.log(array1);
    for (let i=0;i<array1.length;i++){
        if(array1[i]>=array1[max]) max=i;
        if (array1[i]<=array1[min]) min=i;
    }
console.log(max, min);


/*3. Создать массив из целых чисел.
Отрицательные элементы массива скопировать в новый массив.
*/
let count=0;
let newArray0=[];
let array2=[5996, -19710, -5773, -3880, 653, 12910, 7424];
for (let i=0;i<array2.length;i++){
    if (array2[i]<0){
        newArray0[count]=array2[i];
        count++;
    }
}
console.log(newArray0);



