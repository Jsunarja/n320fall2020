fetch("data/data.json").then(response => {
    return response.json();
}).then((data)=> {
    console.log(data);
});


let app = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    }
})