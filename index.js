const arrayDiv = document.getElementById("array")
const arrayUl =  document.createElement("ul");
arrayUl.className = "list";
arrayDiv.appendChild(arrayUl);

const array = new VisualArray();
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

let arrayLi;

for (let i = 0; i < array.capacity; ++i) {
    arrayLi = document.createElement("li");
    if (i < array.length){
        arrayLi.innerHTML = array[i];    
    } else{
        arrayLi.innerHTML = "ø"; 
    }
    arrayLi.id = "list-item-" + i;
    arrayLi.className = "list-item";
    arrayUl.appendChild(arrayLi);
};

