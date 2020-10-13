Vue.component("book-view", {
	props: ["book"],
	template: "<li>{{book.cover}} {{book.title}} by {{book.author}} ",
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
				id: 2,
				cover: "📓",
				title: "Harry Potter and the Philosopher's Stone",
				author: "J. K. Rowling",
			},
			{
				id: 3,
				cover: "📓",
				title: "The Hunger Games",
				author: "Suzanne Collins",
			},
		],
	},
	methods: {
		bookDisplay: function () {
			console.log(this.books[1]);
			/*var secondBook = this.books[1];
			if (this.display != false) {
				this.display = false;
				secondBook.show = false;
				console.log(secondBook.show);
			} else {
				this.display = true;
				secondBook.show = true;
				console.log(secondBook.show);
			}*/
		},
	},
});
