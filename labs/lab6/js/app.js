Vue.component("book-view", {
	props: ["book"],
	template:
		"<li v-if='book.id !=2' >{{book.cover}} {{book.title}} by {{book.author}} ",
});

let app = new Vue({
	el: "#app",
	data: {
		display: true,
		message: "Many titles of books",
		books: [
			{
				id: 0,
				cover: "📓",
				title: "The Great Gatsby",
				author: "F. Scott Fitzgerald",
			},
			{
				id: 1,
				cover: "📓",
				title: "Fahrenheit 451",
				author: "Ray Bradbury",
			},
			{
				id: 3,
				cover: "📓",
				title: "Harry Potter and the Philosopher's Stone",
				author: "J. K. Rowling",
			},
			{
				id: 4,
				cover: "📓",
				title: "Hunger Games",
				author: "Suzanne Collins",
			},
		],
	},
	methods: {
		bookDisplay: function () {
			if (this.books[1].id != 2) {
				this.books[1].id = 2;
			} else {
				this.books[1].id = 1;
			}
		},
	},
});
