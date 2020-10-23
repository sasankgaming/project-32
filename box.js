class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      if(this.body.speed<3){

        
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(2);
      stroke("orange");
      rect(0, 0, this.width, this.height);
      
        
      }
      else{
        
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint (255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      } 
    }
  };
  