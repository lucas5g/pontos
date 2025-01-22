// const array = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
// ];
// const index = array.findIndex(obj => obj.name === 'Charlie');

// console.log(index); // Output: 1 

const obj = {
    "entrada": "09:00",
    "almoco": "12:00",
    "retorno": "13:00",
    "saida": "18:00"
}

const newObj = Object.entries(obj).map(([key, value]) => {
    return {
        [key]: timeToMinutes(value)
    }
})

console.log(Object.entries(obj))
console.log('fromEntries', Object.fromEntries(Object.entries(obj)))
// console.log(newObj)


function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}
