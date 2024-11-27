// Information box
push();
fill(0, 0, 0);
stroke(255, 255, 255);
rect(80, 50, 60, 80);
pop();

push();
text(
  /* Click Start to begin the game. 
    To win you need to shoot down all aliens. 
    But watch out, they shoot back. To move the 
    spaceship you press the left arrow to run 
    to the left and the right arrow to run to 
    the right. To shoot the aliens you push 
    the arrow up. you can also hide behind the 
    planets, but watch out because they might 
    disapear little by littel when the aliens 
    hit the target. Good luck */ 80,
  50,
  [60, 30]
);
pop();
