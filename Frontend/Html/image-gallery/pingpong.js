  document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball");// targetting the ball element
    let paddle = document.getElementById("paddle");

    let ballX = 50;// distance of the top of the ball w.r.t ping pong table
    let ballY = 50;//distance of the LEFT of the ball w.r.t ping pong table

    let dx = 2;//displacement factor in x-direction
    let dy = 2;//displacement factor in y-direction
    
    //here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    
    setInterval(function exec() {
        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        //if(ballX > 700-20 || ballX <= 0) dx *= -1;
        //if(ballY > 400-20 || ballY <= 0) dy *= -1; 

        /**
         * ballX < paddle.offsetleft + paddle.offsetwidth -> if left(w.r.t table)of ball < right (w.r.t table) of the paddle
         * ballY > paddle.offsettop --> if top(w.r.t table) of ball > top(w.r.t table) of paddle
         * ballY + paddle.offsethieght < paddle.offsettop + paddle.offsetHeight --> 
         * ballY + ball.offsetHieght --> bottom of the ball
         * paddle.offsetTop + paddle.offsetHieght --> bottom of the paddle
         */

        if (ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
            ) {
          dx*= -1;   
        }
        
        //collision of ball and paddle
        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;// change x-direction
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;// change y-direction
    },1);
    
    let paddleY = 0;
    let dpy = 10; // displacement for paddle in y-direction
    document.addEventListener("keydown", (event) => {
        event.preventDefault();// prevents the execution of the default behavior
    if(event.keyCode == 38 && paddleY > 0) {
    //up arrow
    paddleY += (-1)*dpy;
    console.log("up" , paddleY)

} else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
    //down arrow
    paddleY += dpy;
}

paddle.style.top = `${paddleY}px`;
});

document.addEventListener("mousemove", (event) => {
    //if(event.clientX > table.offsetLeft + (table.offsetWidth/2)) return;//for ressist other half movement of mouse
    let mouseDistanceFromTop = event.clientY;// this is the distance of the mouse point from the top of the 
    let distanceOfTableFromTop = table.offsetTop;
    let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
    paddleY = mousePointControl;
    if (paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return; // if bottom of the paddle touches bottom of the table return
    paddle.style.top = `${paddleY}px`;
})
});