import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("cat");

console.log(list.toString());
console.log('list size >', list.size());
console.log('head >', list.head());
console.log('tail >', list.tail());
console.log('at(3) >', list.at(3));

list.pop();
console.log('turtle removed > ', list.toString());

console.log('contains parrot? ', list.contains('parrot'));
console.log('contains turtle? ', list.contains('turtle'));

list.append('lion');
console.log('lion added > \n', list.toString());

console.log('find lion: ', list.find('lion'));
console.log('find mouse: ', list.find('mouse'));

console.log('list size >', list.size());
list.insertAt('dove', 4);
console.log('dove added at 4 > ', list.toString());
console.log('list size >', list.size());
list.removeAt(3);
console.log('hamster removed at 3 > ', list.toString());
console.log('list size >', list.size());