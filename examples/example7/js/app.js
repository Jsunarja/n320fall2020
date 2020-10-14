Vue.component("coffee-view", {
	props: ["coffee"],
	template: "<li>{{ coffee.name }} : ${{ coffee.price }}</li>",
});

Vue.component("clock-view", {
	data: function () {
		return {
			hour: 12,
		};
	},
	template: "<div>It is <input v-model='hour'/> {{ hour }} 'Oclock<div>",
});

Vue.component("meal-view", {
	props: ["time"],
	data: function () {
		return {
			breakfast: "Eggs",
			lunch: "Burger",
			dinner: "Steak",
		};
	},
	template: "<div>{{time}}</div></div>",
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

let clock = new Vue({
	el: "#clockBody",
	data: {
		clockMessage: "What time is it?",
		hour: "whatever",
	},
});
