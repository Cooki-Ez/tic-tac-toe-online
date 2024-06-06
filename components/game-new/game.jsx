import {GameLayout} from "./ui/game-layout";
import {BackLink} from "./ui/back-link";
import {GameTitle} from "./ui/game-title";
import {GameInfo} from "./ui/game-info";
import {PLAYERS} from "./constants";
import {PlayerInfo} from "./ui/player-info";
import {GameMoveInfo} from "./ui/game-move-info";
import {GameCell} from "./ui/game-cell";
import {GameOverModel} from "./ui/game-over-model";
import {GAME_STATE_ACTIONS, gameStateReducer, initGameState} from "./model/game-state-reducer";
import {computeWinner} from "./model/compute-winner";
import {getNextTurn} from "./model/get-next-turn";
import {useReducer} from "react";
import {ComputeWinnerSymbol} from "./model/compute-winner-symbol";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {playersCount: PLAYERS_COUNT},
    initGameState
  );

  const winnerSequence = computeWinner(gameState);
  const nextTurn = getNextTurn(gameState);
  const winnerSymbol = ComputeWinnerSymbol(gameState,
    {winnerSequence,
      nextTurn
    });

  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);


  return (
    <>
      <GameLayout
        backLink={<BackLink/>}
        title={<GameTitle/>}
        gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={"1 min to turn"}/>}
        playersList={
          PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) =>
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              seconds={60}
              symbol={player.symbol}
              isRight={index % 2 === 1}
            />
          )
        }
        gameMoveInfo={<GameMoveInfo currentTurn={gameState.currentTurn} nextTurn={nextTurn}/>}
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModel
        players={
          PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              seconds={60}
              symbol={player.symbol}
              isRight={index % 2 === 1}
            />
          )
        }
        winnerName={winnerPlayer?.name}/>
    </>
  );
}
