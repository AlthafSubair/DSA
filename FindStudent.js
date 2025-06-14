const studets = ["Jhon", "Jane", "Mary", "Tom", "Sara"];

const findStudent = (studetsArr, name) => {
    for(let i = 0; i < studetsArr.length; i++){
        if(studetsArr[i] === name){
            return `Student ${name} is found at index ${i}`;
        }
    }
}

console.log(findStudent(studets, "Jhon")); 