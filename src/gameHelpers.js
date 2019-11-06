export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']));


export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    
    //we wanna loop through each cell of the tetromino and compare it to the stage
    for(let y = 0; y < player.tetromino.length; y++){
        for(let x = 0; x < player.tetromino[y].length; x++){
            
            //checking if the tetromino cell is not empty
            if(player.tetromino[y][x] !== 0){
                if(
                    //Check that the tetromino next move will be within the stage height
                    !stage[y + player.pos.y + moveY] ||

                    //check that the tetromino next move will be within the stage width
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||

                    //check that the next move will not go through an occupied cell
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                )
                {return true}
                
            }
        }
    }
    return false;

}

