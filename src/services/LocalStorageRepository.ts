export const getItems = (collection = 'user') => {
  return JSON.parse(localStorage.getItem(collection))
}
export const setItem = (items = {}, key = 'user') => {
  localStorage.setItem(key, JSON.stringify(items))
}
