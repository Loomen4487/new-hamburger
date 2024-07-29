function searchNotice() {
	const searchTextBoxEl = document.querySelector('#search_bar');
	window.location.href = `http://127.0.0.1:5501/notice_list.html?search=${searchTextBoxEl.value}`;
}