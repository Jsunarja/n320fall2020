Vue.component("DataDisplay",{
    props:["players"],
    template:"<div><h2>Players In Game</h2><div v-for='player in players v-bind:players='this.players'>{{ player.name }} is {{ player.color }}</div></div>"
})

let app = new Vue({
    el:"#app",
    props:["players"],
    data: function(){
        return{
            players: null,
        }
    },
    mounted: function(){
        fetch("data/data.json")
            .then((response)=> response.json())
            .then((jsonData)=>{
                console.log(jsonData);
                this.players = jsonData;
        });
    },
});
