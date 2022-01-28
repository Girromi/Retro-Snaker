function Food(gameSnake) {
    var self = this;
    // 食物的位置
    do {
        this.row = parseInt(Math.random() * gameSnake.row);
        this.col = parseInt(Math.random() * gameSnake.col);
    } while ((function() {
        // 判断食物和蛇是否重合
        for(var i = 0;i < gameSnake.snake.body.length; i++){
            if(gameSnake.snake.body[i].row == self.row && gameSnake.snake.body[i].col == self.col) {
                return true;
            }
        }
        return false;
    })());
    console.log(this.row,this.col);
};

Food.prototype.render = function() {
    game.setHTML(this.row,this.col,"♥");
};