import { GameSymbol } from './game-symbol';
import { clsx } from 'clsx';

export function GameCell({isWinner, onClick, symbol}) {
  return (
    <button
      className={clsx(
        'border border-gray-500 -mt-px -ml-px flex items-center justify-center bg-transparent',
        isWinner && 'bg-red-300'
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol}/> : null}
    </button>
  );
}
