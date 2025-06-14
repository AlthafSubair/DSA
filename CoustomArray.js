class CoustomArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift(){
      
      for(let i = 0; i < this.length; i++){
        this.data[i] = this.data[i + 1]
      }

      delete this.data[this.length - 1];

      this.length--;

      return this.length;

    }

    deleteByIndex(index){
        
 for(let i = index; i < this.length; i++){
        this.data[i] = this.data[i + 1]
      }

      delete this.data[this.length - 1];

      this.length--;

      return this.length;
      
    }

}

const myArray = new CoustomArray();

myArray.push('mango');
myArray.push('apple');
myArray.push('orange');

// myArray.shift()

myArray.deleteByIndex(1)

// console.log(myArray.get(1));

// myArray.pop()

console.log(myArray);