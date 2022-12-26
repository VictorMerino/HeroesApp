export const getItems = (collection = 'user') => {
  return JSON.parse(localStorage.getItem(collection))
}
export const setItem = (items = {}, key = 'user') => {
  localStorage.setItem(key, JSON.stringify(items))
}
export const removeItem = (key = 'user') => {
  localStorage.removeItem(key)
}
