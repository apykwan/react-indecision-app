const fullName = "Andrew Meat";

const getFirstName = yourName => {
    const firstName = yourName.split(" ")[0];
    console.log(firstName);
}

// getFirstName('Andy Kwan');

const user = {
    name: 'Andrwe',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    PrintPlaceLived() {
       return this.cities.map(city => this.name + " has lived in " + city);
    }
}

// const user = {
//     name: 'Andrwe',
//     cities: ['Philadelphia', 'New York', 'Dublin'],
//     PrintPlaceLived: function () {
//         this.cities.forEach(function(el) {
//             console.log(that.name + ' has lived in ' + el)
//         }.bind(this));
//     }
// }

console.log(user.PrintPlaceLived());

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(el => el * this.multiplyBy);
    }
}




console.log(multiplier.multiply());





