let app = new Vue({
    el:"#app",
    data: function(){
        return{
            players: null,
        }
        
    },
    mounted: function(){
        fetch("data/data.json").then((response)=> response.json()).then((jsonData)=>{
            console.log(jsonData);
            this.players = jsonData;
        })
    }
});