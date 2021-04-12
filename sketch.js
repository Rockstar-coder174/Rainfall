const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var Maxdrops = 100
var drops = []


function setup(){
    createCanvas(400,400)
    engine = Engine.create();
    world = engine.world;
    
    for(var x=0; x<Maxdrops; x++){
        drops.push(new Drops(random(0,400),random(0,400)))
            } 
}
function draw(){
    background(0);
    Engine.update(engine);
    if (frameCount% 150 === 0){
        for(var i = 0; i<Maxdrops; i++)
    {
         drops[i].display();
        }

    }      


    
    //Spawndrops();
    

}
 
//*function Spawndrops(){
//    var rand = random(10,390)
  //  if (Framecount%80 === 0){
    //    drop1 = new Drops(rand,390,100,100)
        
        
    //}
     
      
  
