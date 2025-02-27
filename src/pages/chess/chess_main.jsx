import { useState } from 'react'
import ChessBoard from './chess_board'
import Socket from './hooks/socket'

export default function ChessMain() {
  const { isConnected, isLoading, color, isGameStarted, onMatchingOpponent, onChessMove, chess } =
    Socket()

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      {isLoading && <div className='loading-spinner loading loading-lg'></div>}
      {!isGameStarted && !isLoading && (
        <button
          onClick={onMatchingOpponent}
          className='btn btn-accent capitalize text-4xl btn-lg text-white'
        >
          start
        </button>
      )}
      {isConnected && isGameStarted && (
        <ChessBoard chess={chess} onChessMove={onChessMove} color={color} />
      )}
    </div>
  )
}
