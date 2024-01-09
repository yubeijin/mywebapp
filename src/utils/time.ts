export const diffTime = (targetTime: any) => {
  const new_data = new Date()
  const old_data = new Date(targetTime)
  const diff: number = (Number(new_data) - Number(old_data)) / 1000
  const days = parseInt((diff / 86400).toString())
  const hours = parseInt((diff / 3600 - 24 * days).toString())
  const minutes = parseInt((diff % 3600 / 60).toString())
  const seconds = parseInt((diff % 60).toString())
  return {
    days,
    hours,
    minutes,
    seconds
  }
}