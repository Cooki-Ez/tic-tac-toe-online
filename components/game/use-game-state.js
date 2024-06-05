import {GAME_SYMBOLS, TURN_ORDER} from "./constants";
import {useState} from "react";
import {computeWinner, getNextTurn} from "./model";

export function useGameState(playersCount) {
  const [{cells, currentTurn, playersTimeOver}, setGameState] = useState(() => (
    {
      cells: new Array(19 * 19).fill(null),
      currentTurn: GAME_SYMBOLS.CROSS,
      playersTimeOver : [],
    }
  ));

  const winnerSequence = computeWinner(cells);
  const nextTurn = getNextTurn(currentTurn, playersCount, playersTimeOver);

  const winnerSymbol = nextTurn === currentTurn ? currentTurn : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index])
        return lastGameState;

      return {
        ...lastGameState,
        currentTurn: getNextTurn(
          lastGameState.currentTurn,
          playersCount,
          lastGameState.playersTimeOver),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentTurn : cell
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentTurn: getNextTurn(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),
      };
    });
  };

  return {
    cells,
    currentTurn,
    nextTurn,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
}
