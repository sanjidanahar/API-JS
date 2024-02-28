const user ={id: 1, name:'Gorib Aamir', job: 'actor'}

// JavaScript Object Notation(JSON) 

const stringified = JSON.stringify(user);

// console.log(user); 
// console.log(stringified); 

/* { id: 1, name: 'Gorib Aamir', job: 'actor' }  ---> JS
{"id":1,"name":"Gorib Aamir","job":"actor"} ---> JSON */


const shop = {
    owner : 'Alia',
    address: {
        stree: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mouse', 'mic', 'monitor'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON); 
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
