
export const secToMinSec = sec => {
  const minutes = Math.floor(sec / 60)
  return `${minutes}:${sec - minutes * 60}`
}
