export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);

  const minutes = minutesAmount % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}


// String(hours).padStart(2, '0') .padStart vai adicionar 0 na frente de hours caso o hours tenha apenas 1 caractere