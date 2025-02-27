import React, { useEffect, useState } from 'react'

const PIECES_FOLDER = '/images/classic-pieces/'

export default function ChessBoard({ chess, onChessMove, color }) {
  const [chessBoard, setChessBoard] = useState(chess.fen())

  function createChessPosition(row, column) {
    return String.fromCharCode(97 + column) + String(8 - row)
  }

  function onPieceDrop(e, final_position) {
    e.preventDefault()
    const initial_position = e.dataTransfer.getData('piece_attributes')
    chess.move(initial_position + final_position)
    onChessMove(chess.fen())
    // localStorage.setItem('chess_board', chess.fen())
    setChessBoard(chess.fen())
  }

  useEffect(() => {
    if (chess.isGameOver()) {
      chess.reset()
      setChessBoard(chess.fen())
    }
  }, [chessBoard])

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className={`border-2 ${color === 'b' && 'rotate-180'} border-black`}>
        {chess.board().map((row, i) => (
          <div className='flex' key={i}>
            {row.map((column, j) => (
              <div
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData('piece_attributes', createChessPosition(i, j))
                }
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onPieceDrop(e, createChessPosition(i, j))}
                key={i + j}
                className={`${color === 'b' && 'rotate-180'} ${
                  column?.color === color && chess.turn() === color ? 'cursor-grab' : 'cursor-not-allowed'
                } flex justify-center items-center size-20 ${
                  chess.isCheck() &&
                  column?.type == 'k' &&
                  chess.turn() == column.color &&
                  'bg-red-600'
                } ${(i + j) & 1 && 'bg-[#769656]'}`}
              >
                {column && <img src={PIECES_FOLDER + column.color + column.type + '.png'} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
