import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import { Home } from './pages/Home'
import { Wallet } from './pages/Wallet'

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [tg])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
