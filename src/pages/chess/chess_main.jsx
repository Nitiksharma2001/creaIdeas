import React from 'react'
import ChessBoard from './chess_board'
import { Chess } from 'chess.js'

export default function ChessMain() {
  const fen = localStorage.getItem('chess_board') ?? undefined
  const chess = new Chess(fen)

  return (
    <>
      <ChessBoard chess={chess} />
    </>
  )
}
