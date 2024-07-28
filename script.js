//our dom function

const classFun = (ele , type) => {
    if(type === "single"){
        return document.getElementsByClassName(ele)[0];
    }else{
        return document.getElementsByClassName(ele)
    }
}

//copy from parent element
const cells = classFun("cell");
const changeToArray = [];
changeToArray.push(...cells);


//install localStorage
if (!(localStorage.getItem("initialData") && localStorage.getItem("days"))){
    localStorage.setItem("initialData" , JSON.stringify([]));
    localStorage.setItem("days" , JSON.stringify([]));
}
//install connection between js and localstorage
const dataArr = JSON.parse(localStorage.getItem("days"));
const initialData = JSON.parse(localStorage.getItem("initialData"));


//clear table
const clearTable = () => {
    localStorage.clear()
}



//checking your name
if (!initialData[0]){
    const name = prompt("Please Enter Your name beform we start:") ?? "";
    if(!name){
        document.getElementsByTagName("body")[0].innerHTML = "";
    }else{
        initialData[0] = name;
        initialData[1] = 0;
        localStorage.setItem("initialData" , JSON.stringify(initialData));
        classFun("myName" , "single").innerText = initialData[0];
        classFun("entireDays" , "single").innerText = initialData[1];
    }
}else{
    classFun("myName" , "single").innerText = initialData[0];
    classFun("entireDays" , "single").innerText = initialData[1];
}



dataArr.forEach(item => {
    cells[item].innerText = "✔";
})


//check days
// const checkDays = (num) => {
//     switch(num){
//         case 0:
//             return "Sunday";
//             break;
//         case 1:
//             return "Monday";
//             break;
//         case 2:
//             return "Tuesday";
//             break;
//         case 3:
//             return "Wedensday";
//             break;
//         case 4:
//             return "Thursday";
//             break;
//         case 5:
//             return "Friday";
//             break;
//         case 6:
//             return "Saturday";
//             break;
//     }
// }


// put event to table cells
changeToArray.forEach((item , key) => {
    item.addEventListener("click" , () => {
        if(item.innerText === ""){
            item.innerText = "✔";
            dataArr.push(key);
            console.log(dataArr);
            localStorage.setItem("days" , JSON.stringify(dataArr));
            initialData[1]++;
            classFun("entireDays" , "single").innerText = initialData[1];
            localStorage.setItem("initialData" , JSON.stringify(initialData));
        }
    })
})