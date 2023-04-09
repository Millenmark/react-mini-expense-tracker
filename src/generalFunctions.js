export const years = (limit = 5) => {
  const list = []
  const yearNow = new Date().getFullYear()

  for (let x = 0; x < 5; x++){
    list.push((yearNow - x).toString())
  }
  return list
}