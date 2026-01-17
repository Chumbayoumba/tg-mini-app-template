import { useTelegram } from '../hooks/useTelegram'
import { Link } from 'react-router-dom'

export function Home() {
  const { user } = useTelegram()

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          👋 Привет, {user?.first_name || 'User'}!
        </h1>
        <p className="text-gray-400">
          Это шаблон Telegram Mini App
        </p>
      </div>

      <div className="space-y-4">
        <Link 
          to="/wallet" 
          className="block w-full p-4 bg-[var(--tg-theme-button-color)] text-center rounded-xl font-semibold"
        >
          💰 Открыть кошелёк TON
        </Link>

        <div className="p-4 bg-white/5 rounded-xl">
          <h3 className="font-semibold mb-2">ℹ️ Информация</h3>
          <p className="text-sm text-gray-400">
            User ID: {user?.id || 'N/A'}<br />
            Username: @{user?.username || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}
