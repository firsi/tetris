import SFX_ambianceUrl from '../assets/Tetris.mp3';
import SFX_clearUrl from '../assets/clear.wav';
import SFX_gameOverUrl from '../assets/gameover.wav';
import SFX_levelUpUrl from '../assets/levelUp.ogg';

const SFX_clear = new Audio(SFX_clearUrl);
const SFX_gameOver = new Audio(SFX_gameOverUrl);
const SFX_levelUp = new Audio(SFX_levelUpUrl);
const SFX_ambiance = new Audio(SFX_ambianceUrl);
SFX_ambiance.loop = true;

export {SFX_ambiance,
        SFX_clear, 
        SFX_gameOver, 
        SFX_levelUp};