export const getItems = (collection = 'user') => {
  return JSON.parse(localStorage.getItem(collection) as string)
}
export const setItem = (items = {}, key = 'user') => {
  localStorage.setItem(key, JSON.stringify(items))
}
export const removeItem = (key = 'user') => {
  localStorage.removeItem(key)
}
