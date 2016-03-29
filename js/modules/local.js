module.exports = (function() {
	return {
		localSave: localSave,
		localClear: localClear,
		setTextToHeadline: setTextToHeadline
	};

	function localSave(form, input, storageName) {
		form.addEventListener('submit', function(e) {
			var inputValue = input.value;
			
			e.preventDefault();

			localStorage.setItem(storageName, inputValue);

			input.value = '';

			setTextToHeadline();
		});
	}
	
	function localClear(button) {
		button.addEventListener('click', function() {
			
			localStorage.clear();

			setTextToHeadline();
		});
	}

	function setTextToHeadline(h1, localText) {
		h1.innerHTML = localText;
	}
})();