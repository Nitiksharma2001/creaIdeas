import { Chess } from 'chess.js'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_BACKEND_URL)

export default function Socket() {
  const [isConnected, setIsConnected] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState('w')

  function onMatchingOpponent() {
    setIsLoading(true)
    socket.emit('find-player')
  }

  const fen = localStorage.getItem('chess_board') ?? undefined
  const [chess, setChess] = useState(new Chess(fen))

  function onChessMove(updateFen) {
    socket.emit('chess-move', updateFen)
  }

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('new-fen', (updateFen) => {
      setChess(new Chess(updateFen))
    })

    socket.on('match-start', (color) => {
      setColor(color)
      setIsLoading(false)
      setIsGameStarted(true)
    })

    return () => {
      socket.off('connect', () => setIsConnected(false))
      socket.off('new-fen', (updateFen) => setChess(new Chess(updateFen)))
      socket.off('match-start', () => {
        setIsLoading(false)
        setIsGameStarted(true)
      })
    }
  }, [])

  return { isConnected, isLoading, onMatchingOpponent, isGameStarted, color, chess, onChessMove }
}
