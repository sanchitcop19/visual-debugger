class VisualArray extends Array{

    constructor(){
        super();
    }

    capacity = 1;

    get capacity(){
        return this.capacity;
    }

    doubleCapacity(){
        this.capacity = 2*this.capacity;
    }

    push(num){
        
        this.update();
        if (this.length >= this.capacity){
            this.doubleCapacity();
        }
        console.log(this.length); 
        return super.push(num);
    }

    update(){
        // Updates display in the DOM
        return;
    }
}