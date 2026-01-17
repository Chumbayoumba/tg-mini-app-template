const tg = window.Telegram?.WebApp

export function useTelegram() {
  const user = tg?.initDataUnsafe?.user

  const showAlert = (message: string) => {
    tg?.showAlert(message)
  }

  const showConfirm = (message: string) => {
    return new Promise<boolean>((resolve) => {
      tg?.showConfirm(message, (confirmed) => resolve(confirmed))
    })
  }

  const close = () => {
    tg?.close()
  }

  return {
    tg,
    user,
    showAlert,
    showConfirm,
    close,
  }
}
