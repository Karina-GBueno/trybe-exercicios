let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let delivery = order.order.delivery.deliveryPerson;
  let orderName = order.name;
  let orderPhoneNumber = order.phoneNumber;
  let orderAddress = order.address;

  console.log('Olá, ' + delivery + ' entrega para: ' + orderName + ', ' + orderPhoneNumber + ' ,' + orderAddress);                                                                      
}

customerInfo(order);

function orderModifier(order) {
  let newName = order.name = 'Luiz Silva';
  let newTotal = order.payment.total = 50;
  let pizzas = Object.keys(order.order.pizza);
  let drink = order.order.drinks.coke.type;
  
  console.log('Olá, ' + newName + ' , o valor total de seu pedido de ' + pizzas + ' e ' + drink + ' é ' + newTotal);
}

orderModifier(order);