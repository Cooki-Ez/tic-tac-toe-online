export function computePlayerTimer(gameState, playerSymbol) {
  return ({
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentTurn
        ? gameState.currentTurnStart
        : undefined,
  });
}
