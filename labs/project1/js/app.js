let app = new Vue({
    el: "#app",
    method: {
        //clickingtuff: function(c){
            //TweenMax.to(columns[c], 0.5, { scaleX: 1.1, scaleY: 1.1 });
        //},   
    },
});

//Get columns and animate when hover over and out
let columns = document.getElementsByClassName("col");
let rows = document.getElementsByClassName("row");

let player;
let rowLength = rows.length;
let row;
let column;
var c;

function mouseOver(c) {
	TweenMax.to(columns[c], 0.5, { scaleX: 1.1, scaleY: 1.1 });
}
function mouseOut(c) {
	TweenMax.to(columns[c], 0.5, { scaleX: 1, scaleY: 1 });
}
function click(c){

    for(i=0; i<rowLength; i++){
        row = rows[i];
        column = columns[c];
    };
    
    if(rowLength > 0){
        rowLength--;
        console.log(rowLength);
    }

    if(player != 1){
        player = 1;
        row.classList.add("playerOne");
        console.log(player);
    } else if (player = 1){
        player += 1;
        row.classList.add("playerTwo");
        console.log(player);
    }  
}