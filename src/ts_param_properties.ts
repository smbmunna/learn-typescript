
class Animal{    
    constructor(public name: string, public species: string, public sound:string){
        this.name= name; 
        this.species= species; 
        this.sound= sound
    }
}

const cat = new Animal('April', 'Persian', 'Meaow'); 
console.log(cat.sound); 

const dog= new Animal('Husky', 'German', 'Bark'); 
console.log(dog.sound); 
