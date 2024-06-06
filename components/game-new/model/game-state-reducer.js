import {getNextTurn} from "./get-next-turn";
import {GAME_SYMBOLS} from "../constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click"
}

export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentTurn: GAME_SYMBOLS.CROSS,
  playersCount,
})


export const gameStateReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const {index} = action;
      if (state.cells[index])
        return state;

      return {
        ...state,
        currentTurn: getNextTurn(state),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentTurn : cell
        ),
      };
    }
    default: {
      return state;
    }
  }
}
