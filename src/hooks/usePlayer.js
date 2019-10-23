import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, direction) => {
      //columns to rows
    const rotatedTetro =   matrix.map((row, index) => matrix.map(col => col[index]));
    //reverse the matrix
    if(direction > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
      
  }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        //checking if the rotation will collide before rotating
        while(checkCollision(player, stage, {x: 0, y: 0})){
            clonedPlayer.pos.x += offset;

            offset = -(offset + (offset > 0 ? 1 : -1));
            if(offset > clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}