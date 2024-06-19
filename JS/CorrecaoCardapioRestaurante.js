class Order {
    constructor(id, customerName, sandwichName, observations, price) {
        this.id = id;
        this.customerName = customerName;
        this.sandwichName = sandwichName;
        this.observations = observations;
        this.price = price;
    }
}
class Restaurant {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
        console.log(`Pedido ${order.id} para ${order.customerName} adicionado.`);
    }
    removeOrder(id) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index !== -1) {
            this.orders.splice(index, 1);
            console.log(`Pedido ${id} removido.`);
        } else {
            console.log(`Pedido ${id} não encontrado.`);
        }
    }
    listOrders() {
        if (this.orders.length === 0) {
            console.log("Nenhum pedido no sistema.");
        } else {
            console.log("Lista de pedidos:");
            this.orders.forEach(order => {
                console.log(`ID: ${order.id}, Cliente: ${order.customerName}, Lanche: ${order.sandwichName}, Observações: ${order.observations}, Preço: R$${order.price.toFixed(2)}`);
            });
        }
    }
    findOrder(id) {
        const order = this.orders.find(order => order.id === id);
        if (order) {
            console.log(`Pedido encontrado: ID: ${order.id}, Cliente: ${order.customerName}, Lanche: ${order.sandwichName}, Observações: ${order.observations}, Preço: R$${order.price.toFixed(2)}`);
        } else {
            console.log(`Pedido ${id} não encontrado.`);
        }
    }
}


const order1 = new Order(1, "João", "X-Burger", "Sem cebola", 15.00);
const order2 = new Order(2, "Maria", "X-Salada", "Adicionar bacon", 18.50);
const order3 = new Order(3, "Carlos", "X-Frango", "Sem maionese", 17.00);
const restaurant = new Restaurant();
restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.addOrder(order3);
restaurant.listOrders();
restaurant.findOrder(2);
restaurant.removeOrder(1);
restaurant.listOrders();
restaurant.findOrder(1);
