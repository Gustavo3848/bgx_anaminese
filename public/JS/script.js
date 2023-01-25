const inputField = document.getElementById('search-input');
const dataList = document.getElementById('search-data').children;
inputField.addEventListener('input', () => {
  const searchValue = inputField.value.toLowerCase();
  for (let i = 0; i < dataList.length; i++) {
    const data = dataList[i];
    if (data.innerHTML.toLowerCase().indexOf(searchValue) !== -1) {
      data.style.display = 'block';
    } else {
      data.style.display = 'none';
    }
  }
});