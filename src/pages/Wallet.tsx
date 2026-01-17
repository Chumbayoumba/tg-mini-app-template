import { TonConnectButton, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
import { Link } from 'react-router-dom'

export function Wallet() {
  const address = useTonAddress()
  const [tonConnectUI] = useTonConnectUI()

  const sendTransaction = async () => {
    try {
      await tonConnectUI.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
          {
            address: 'EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn',
            amount: '10000000', // 0.01 TON
          },
        ],
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="p-6">
      <Link to="/" className="text-[var(--tg-theme-link-color)] mb-4 block">
        ← Назад
      </Link>

      <h1 className="text-2xl font-bold mb-6">💰 Кошелёк TON</h1>

      <div className="mb-6">
        <TonConnectButton className="w-full" />
      </div>

      {address && (
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-sm text-gray-400 mb-1">Адрес:</p>
            <p className="font-mono text-xs break-all">{address}</p>
          </div>

          <button
            onClick={sendTransaction}
            className="w-full p-4 bg-green-600 text-white rounded-xl font-semibold"
          >
            Отправить 0.01 TON
          </button>
        </div>
      )}
    </div>
  )
}
