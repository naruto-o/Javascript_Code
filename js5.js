//objects
const person ={
    name:'Leonardo',
    shirt:'White',
    career:'Actor'
};
console.log(person.career);
console.log(person.name);
console.log(person['name']);
console.log(person['shirt']);

//assign object
person.movie='TITANIC';
console.log(person.movie);
console.log(person);

const King = {
        name:'Shikhar',
        shirt:'RedCheckered Shirt',
        traits:'Smart,Ambitious',
        truth:'Billionaire'
};
console.log(King);
console.log(King.name);
console.log(King.traits);

const introducer = (name,traits) =>{
      const person = {
        name:  name,
        traits:traits,
        assests: 1000000, 
        debts:60000,
        networth : function (){
            return this.assests - this.debts;
        }
      }
      const intro = `hi my name is ${person.name} and my traits are ${person.traits} and my current networth is $${person.networth()} USD`
      return intro;
}
console.log(introducer('sam','LEADERSHIP'));
// console.log(introducer('Leonardo','ACTING'))n