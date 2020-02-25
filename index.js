

const array = new VisualArray();
array.push(1);
array.push(2);
array.push(3);
array.push(3);
array.push(3);



const insertButton = document.getElementById("insert");
insertButton.addEventListener("click", (e) => {
    console.log(e);
    const index = document.getElementById('index');
    const value = document.getElementById('value');
    array.insert(index, value);
})