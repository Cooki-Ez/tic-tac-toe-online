import {GAME_SYMBOLS, TURN_ORDER} from "./constants";
import {useState} from "react";

function getNextTurn(currentTurn) {
  const nextTurnIndex = TURN_ORDER.indexOf(currentTurn) + 1;
  return TURN_ORDER[nextTurnIndex] ?? TURN_ORDER[0];
}

export function useGameState() {
  const [{cells, currentTurn}, setGameState] = useState(() => (
    {
      cells: new Array(19 * 19).fill(null),
      currentTurn: GAME_SYMBOLS.CROSS
    }
  ));
  const nextTurn = getNextTurn(currentTurn);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index])
        return lastGameState;

      return {
        ...lastGameState,
        currentTurn: getNextTurn(lastGameState.currentTurn),
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
    handleCellClick
  };
}
