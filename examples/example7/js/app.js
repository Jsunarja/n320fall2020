Vue.component("coffee-view", {
	props: ["coffee"],
	template: "<li>{{ coffee.name }} : ${{ coffee.price }}</li>",
});

let app = new Vue({
	el: "#app",
	data: {
		purchases: 0,
		message: "Many coffee stuff.",
		coffees: [
			{ id: 0, price: 5, name: "Black Rifle Coffee Company" },
			{ id: 1, price: 10, name: "Laughing Man" },
			{ id: 2, price: 15, name: "Starbucks" },
		],
		ready: true,
	},
	methods: {
		buyCoffee: function () {
			this.purchases += 1;
		},
	},
});
