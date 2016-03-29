module.exports = (function() {
	return {
		localSave: localSave,
		localClear: localClear,
		setTextToHeadline: setTextToHeadline
	};

	function localSave(form, input, localStorageName, h1) {
		form.addEventListener('submit', function(e) {
			var inputValue = input.value;

			e.preventDefault();
			localStorage.setItem(localStorageName, inputValue);

			input.value = '';
			setTextToHeadline(h1, inputValue);
		});
	}
	
	function localClear(button, h1, localText) {
		button.addEventListener('click', function() {
			localStorage.clear();
			setTextToHeadline(h1, localText);
		});
	}

	function setTextToHeadline(h1, localText) {
		h1.innerHTML = localText;
	}
})();