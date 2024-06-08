import {getNextTurn} from "./get-next-turn";
import {GAME_SYMBOLS, TURN_ORDER} from "../constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
}

export const initGameState = ({ playersCount, defaultTimer, currentTurnStart}) => ({
  cells: new Array(19 * 19).fill(null),
  currentTurn: GAME_SYMBOLS.CROSS,
  currentTurnStart,
  playersCount,
  timers: TURN_ORDER.reduce((timers, symbol, index) => {
    if(index < playersCount)
      timers[symbol] = defaultTimer;

    return timers;
  }, {})
})


export const gameStateReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const {index, now} = action;
      if (state.cells[index])
        return state;

      return {
        ...state,
        timers: updateTimers(state, now),
        currentTurn: getNextTurn(state),
        currentTurnStart: now,
        cells: updateCell(state, index),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const {now} = action;

      if(!isTimeOver(state, now))
        return state;

      return {
        ...state,
        timers: updateTimers(state, now),
        currentTurn: getNextTurn(state),
        currentTurnStart: now,
      }
    }
    default: {
      return state;
    }
  }
}


function updateTimers(gameState, now){
  const diff = now - gameState.currentTurnStart;
  const timer = gameState.timers[gameState.currentTurn];

  return {
    ...gameState.timers,
    [gameState.currentTurn]: timer - diff,
  }
}
function updateCell(gameState, index){
  return gameState.cells.map((cell, i) =>
      i === index ? gameState.currentTurn : cell
  );
}

function isTimeOver(gameState, now){
  const timer = updateTimers(gameState, now)[gameState.currentTurn];

  return timer <= 0;
}
