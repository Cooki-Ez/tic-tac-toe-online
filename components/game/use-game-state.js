import {GAME_SYMBOLS, TURN_ORDER} from "./constants";
import {useState} from "react";
import {computeWinner, getNextTurn} from "./model";

export function useGameState(playersCount) {
  const [{cells, currentTurn}, setGameState] = useState(() => (
    {
      cells: new Array(19 * 19).fill(null),
      currentTurn: GAME_SYMBOLS.CROSS
    }
  ));

  const winnerSequence = computeWinner(cells);

  const nextTurn = getNextTurn(currentTurn, playersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index])
        return lastGameState;

      return {
        ...lastGameState,
        currentTurn: getNextTurn(lastGameState.currentTurn, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentTurn : cell
        ),
      }
    })
  }

  return {
    cells,
    currentTurn,
    nextTurn,
    handleCellClick,
    winnerSequence,
  };
}
