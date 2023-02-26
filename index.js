//let item1;
let item1 = parseInt(document.getElementById('jurassic_item').innerHTML);
let item2 = parseInt(document.getElementById('monsters_item').innerHTML);
let item3 = parseInt(document.getElementById('pikachu_item').innerHTML);
let item4 = parseInt(document.getElementById('sonic_item').innerHTML);

//let discount_rate = 0.2;
let sum = item1 + item2 + item3 + item4

const currency = 'р.';

console.log(sum)

total.textContent = sum + ' ' + currency;



// function getSum() {

//

//document.getElementById('total').innerHTML = sum;

//}


function showDiscount(discount_rate) {


    let discount = sum * discount_rate

    total.textContent = (sum - discount) + ' ' + currency;
    button_discount.textContent = 'Купон применен'
}

