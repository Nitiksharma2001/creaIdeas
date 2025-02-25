import React, { useEffect, useState } from 'react'
import { Chess } from 'chess.js'

const PIECES_FOLDER = '/src/assets/classic-pieces/'

const chess = new Chess()

export default function ChessBoard() {
  const [chessBoard, setChessBoard] = useState(chess.board())

  function createChessPosition(row, column) {
    return String.fromCharCode(97 + column) + String(8 - row)
  }
  function onPieceDrop(e, row, column) {
    e.preventDefault()
    const { type, initial_position } = JSON.parse(e.dataTransfer.getData('piece_attributes'))
    const final_position = createChessPosition(row, column)

    chess.move({ from: initial_position, to: final_position })
    setChessBoard(chess.board())
  }

  useEffect(() => {
    if (chess.isGameOver()) {
      chess.reset()
      setChessBoard(chess.board())
    }
  }, [chessBoard])
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='border-2 border-black'>
        {chessBoard.map((row, i) => (
          <div className='flex' key={i}>
            {row.map((column, j) => (
              <div
                onDragStart={(e) =>
                  e.dataTransfer.setData(
                    'piece_attributes',
                    JSON.stringify({
                      type: column.type,
                      initial_position: createChessPosition(i, j),
                    })
                  )
                }
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onPieceDrop(e, i, j)}
                key={i + j}
                className={`cursor-grab flex justify-center items-center size-20 ${
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
