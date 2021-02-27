var gameState=0
var playerCount
function setup() {
    createCanvas(1200, 600)
    game1  =  new Game()
    game=new Game1()
    player=new Player()
    welcome=new Welcome()
    player1=new Player1()
    player2=new Player2()
    player3=new Player3()
    player4=new Player4()
    player5=new Player5()
    Player6=new Player6()


}
function draw() {
    if (gameState==0){
        game1.start()
    
    }
    if(playerCount==6){
        game.update(1)
    }
    if(gameState==1){
        game.play
    }
}