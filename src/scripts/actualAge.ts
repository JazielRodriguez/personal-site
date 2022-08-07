export const actualAge = (): void => {
  const birthYear: number = 2005
  const actualYear: number = new Date().getFullYear()
  const actualAge: number = actualYear - birthYear
  const container = document.getElementById('actual-age')
  container!.textContent = `${actualAge}`
  console.log(actualYear - birthYear)
}
