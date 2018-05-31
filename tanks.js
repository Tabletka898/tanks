var obstacle = [
    {
        tipe: "rock-1",
        left: 400,
    },
    {
        tipe:"mane",
        left: 600
    }
];
function move(){
    if(new Date().getMilliseconds()%111 == 0){
        obstacle.push({tipe:"mane",
                        left: 800})
    }
    for(var i = 0; i < obstacle.length; i++){
            obstacle[i].left -= 10;
    }
    show();

}
function shoot(){
    console.log('shooot');
}
function action(e){
    console.log(e.keyCode);
    if(e.keyCode == 39){
        move();
    }
    if(e.keyCode == 32){
        shoot();
    }
}
function show(){
    var map = document.getElementById('map');
    var obs = document.querySelectorAll("#map>.obs")
    for(var i = 0; i < obs.length; i++){
        map.removeChild(obs[i]);
    }
    for(var i = 0; i < obstacle.length; i++){
        var div = document.createElement('div');
        div.className = obstacle[i].tipe + " obs";
        div.style.left = obstacle[i].left + "px";
        map.appendChild(div);
    }
}
document.body.addEventListener("keydown",action);
show();
