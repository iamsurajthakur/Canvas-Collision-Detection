const canvas = document.querySelector('#canvas');
const ctx =  canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 4;
})

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

function getDistance(x1,y1,x2,y2){

    xDistance = x2 - x1;
    yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}


function Ball(x,dx,y,dy,radius,color){

    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'black'
        ctx.fill();
        ctx.stroke();
    }
    this.update = function(){
        
        
        if(getDistance(ball.x,ball.y,ball2.x,ball2.y) < ball.radius * 2 - ball2.radius){
            ball.color = "#219ebc"
            
        }else{
            ball.color = '#d90429'
        }
        this.draw();
    }
}

let ball = new Ball(300,5,300,5,100,'#219ebc')
let ball2 = new Ball(undefined,undefined,undefined,undefined,50,'#ffb703')

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ball.update();
    ball2.x = mouse.x;
    ball2.y = mouse.y;
    ball2.update();


}

animate();