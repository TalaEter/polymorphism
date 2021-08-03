// continue from the prototyping example
// create htmlImage elemetn that inherits from htmlElement returns 
// so it can be clicked and focused 
//has a render method 



function HTMLElement(){ //constructor of parent
    this.click = function() {
        return "clicked";
    }
}
HTMLElement.prototype.focus = function() {  return "focused";}



// const e = new HTMLElement();


function HTMLSelectElement(array){ //constructor of child also i can use array=[] instead of the or 
    this.array = array || [];

    this.addItem = function(item){ this.array.push(item);}
    this.removeItem = function(item){ this.array.splice( this.array.indexOf(item) ,1 );  }

    this.render = function (){ 
        return `
<selection> ${ this.array.map(array =>`
    <option> ${array} </option>`).join('')}
</sleection>`; 
    }
}

HTMLSelectElement.prototype = new HTMLElement(); // instead of Object.protot... because using it we couldnt see the click method but now we can
HTMLSelectElement.prototype.constructor = HTMLSelectElement;




function HTMLImageElement(src){
    this.src = src;
    this.render = function(){ return `<img src="${this.src}" />`;  }
}
HTMLImageElement.prototype = new HTMLElement(); // instead of Object.protot... because using it we couldnt see the click method but now we can
HTMLImageElement.prototype.constructor = HTMLImageElement;




const elements = [
    new HTMLSelectElement([1,2,3]), // returns     <select>   <option>1</option> <option>2</option>  <option>3</option> </select>
    new HTMLImageElement('http://') //reutrns <img src="http://" />
];
for( let element of elements)
    console.log(element.render());
