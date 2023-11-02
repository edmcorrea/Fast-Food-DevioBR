export const getSummaryListLocalStorage = () => {
  return JSON.parse(localStorage.getItem('summary_list'));
}

export const setSummaryListLocalStorage = (data) => {
  return localStorage.setItem('summary_list', JSON.stringify(data));
}
