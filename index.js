// Write your solution in this file!
customerName = "bob";
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Chess';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Ianno';
}