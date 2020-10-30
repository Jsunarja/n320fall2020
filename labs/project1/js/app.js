//Get columns and animate when hover over and out
let columns = document.getElementsByClassName("col");
var c;
function mouseOver(c) {
	TweenMax.to(columns[c], 0.5, { scaleX: 1.1, scaleY: 1.1 });
}
function mouseOut(c) {
	TweenMax.to(columns[c], 0.5, { scaleX: 1, scaleY: 1 });
}
function click(c){
    let row = document.getElementsByClassName("row");
    var r;
    for(i=0; i<row.length; i++){
        colums[c].row[i].classList.add('playerOne');
    }
}


let app = new Vue({
    el: "#app",
    method: {
        addButton: function(){

        },   
    },
});

