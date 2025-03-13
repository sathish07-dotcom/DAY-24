
//let student_name1 ='sagar';
//let student_name2 ='sathish';
//let student_name3 ='laddu';
//let student_name4 ='rahul';
//let student_name5 ='akhil';
//let student_name6 ='akash';
//let student_name7 ='rakesh';
//console.log(student_name1,student_name2,student_name3,student_name4,student_name5,student_name6,student_name7);

//TYPES OF CREATING ARRAYS

let student_names = ['sagar', 'sathish', 'laddu', 'rahul', 'akhil', 'akash', 'rakesh'];
console.log(student_names);
console.log(typeof student_names)

let num = [2, 4, 6, 8];
console.log(num);
console.log(num[3]);

let newArry = [];
console.log(newArry);
console.log(newArry.length);

let addres = ['keshanapalli', 22.25, 900, 'Telangana']; //mixred array
console.log(addres);

//MUTABLE AND IMMUTABLE 

let str = 'sagar';
console.log(str);
str[0] = 'r';
console.log('immutable=', str);

let arr = ['rahul', 'sagar', 'sathish'];
console.log(arr);
arr[1] = 'akhil';
console.log('mutable=', arr);
arr[12] = 'rakesh';
console.log(arr);
console.log('arr[12]=', arr[12]);
console.log(arr.length);


//ARRAY METHODS

let aboutme = ["sathish", 22, "uasc", "hmdk"];
console.log(aboutme);
//PUSH(ADD ELEMENTS END OF ARRAY)
aboutme.push("mca student");
console.log(aboutme);

//POP(DELETE ELEMENTS END OF ARRAY)
aboutme.pop();
console.log(aboutme);

//UNSHIFT(ADD ELEMENTS START OF ARRAY)
aboutme.unshift("s/o Rajaiah");
console.log(aboutme);

//SHIFT(DELETE ELEMENTS START OF ARRAY)
aboutme.shift();
console.log(aboutme);

let movieArr = ['salar', 'BB2', 'BB', 'pushpa', 'king'];
console.log(movieArr);
//push
movieArr.push('f2', 'f3', 'bunny', 'happy');
console.log(movieArr);
//pop
movieArr.pop();
console.log(movieArr);//delete 'happy'
//unshift
movieArr.unshift('ganga', 'kanchana', 'pushapa2');
console.log(movieArr);
//shift
movieArr.shift();
console.log(movieArr);
movieArr.shift();
console.log(movieArr);

//FOLLOWERS COUNT SYSTEM BY USING ARRAY METHODS

let followers = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(followers);
//push
//unshift
let blocklist = followers.pop();
//shift
console.log(followers);

//INDEXOF METHODE
let car = ['bmw', 'suv', 'maruti', 'toyota'];
console.log(car);
console.log(car.indexOf('maruti'));
console.log(car.indexOf('tata'));

//INCLUDES  METHODE
console.log(car.includes('suv'));
console.log(car.includes('rr'));

//CONCTA
let color1 = ['red', 'blue', 'white', 'green'];
let color2 = ['black', 'pink', 'yellow'];
console.log(color1.concat(color2));

//RECERSE
console.log(color1.reverse());
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Before reverce=', num1);
console.log('After revecrse=', num1.reverse());

//SLICE
let A = ['a', 'b', 'c', 'd', 'q', 'e', 't'];
let Subarray = A.slice(0, 4);
console.log(A.slice(-5));
console.log(Subarray);

//SPLICE
let numberr = ['1', '2', '3', '4', '5', '6', '7'];
numberr.splice(2, 4, '101', '102', '103', '104');
console.log(numberr);


//SORT 
let arr_1 = ['a', 'g', 'b', 'm', 'l'];
console.log('Before sorting=', arr_1);
console.log('After sorting=', arr_1.sort());

let arrNew = [1, 4, 7, 2, 5];
console.log('Before sorting=', arrNew);
console.log('After sorting=', arrNew.sort());

//REFERENCES
let arr1 = [1];
let arr2 = [1];
console.log(arr1 === arr2);
console.log(arr1 == arr2);
//THE OUTPUT SHOWS FALSE BECAUSE OF THE MEMORY LOCATIONS/ADDRESS ARE DIFFERENT...
let laddu = ['a', 'b'];
let ladduCopy = laddu;
console.log(ladduCopy);
ladduCopy.push('c');
console.log(ladduCopy);
console.log(laddu);
console.log(laddu == ladduCopy);

//NESTED ARRAYS
let sagar = [[2, 4], [3, 6], [4, 8]];
console.log(sagar);

let sathsih = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(sathsih);

//FOR EACH


//MAP

//FILTER

//REDUCE




