class VisualArray extends Array {
    constructor() {
        super();
    }

    capacity = 1;

    get capacity() {
        return this.capacity;
    }

    doubleCapacity() {
        this.capacity = 2 * this.capacity;
    }

    push(num) {
        if (this.length >= this.capacity) {
            this.doubleCapacity();
        }
        console.log(this.length);
        const result = super.push(num);
        this.update();
        return result;
    }

    insert(index, value) {
        const result = super.insert(index, value);
        this.update();
        return result;
    }

    update() {
        // Updates display in the DOM
        const arrayDiv = document.getElementById("array");
        const previousList = document.getElementById("list-id");
        if (previousList) {
            arrayDiv.removeChild(previousList);
        }

        const arrayUl = document.createElement("ul");
        arrayUl.id = "list-id";
        arrayUl.className = "list";
        arrayDiv.appendChild(arrayUl);

        let arrayLi;

        for (let i = 0; i < array.capacity; ++i) {
            arrayLi = document.createElement("li");
            if (i < array.length) {
                arrayLi.innerHTML = array[i];
            } else {
                arrayLi.innerHTML = "ø";
            }
            arrayLi.id = "list-item-" + i;
            arrayLi.className = "list-item";
            arrayUl.appendChild(arrayLi);
        }
        return;
    }
}
