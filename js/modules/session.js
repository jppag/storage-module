module.exports = (function() {
	var setList, getList, _changeItemDo, changeItem, deleteUsers, users;

	setList = function(sessionStorageName, initialObject) {
		users = sessionStorage.setItem(sessionStorageName, JSON.stringify(initialObject));
	};

	getList = function(sessionStorageName, sessionText, list) {
		list = JSON.parse(sessionStorage.getItem(sessionStorageName));

		sessionText.innerHTML = JSON.stringify(list);
	}

	_changeItemDo = function(object, sessionStorageName, list, inputName, inputLastName, sessionText) {
		list = JSON.parse(sessionStorage.getItem(sessionStorageName));
		
		list.push(object);

		sessionStorage.setItem(sessionStorageName, JSON.stringify(list));

		inputName.value = '';
		inputLastName.value = '';

		getList(sessionStorageName, sessionText, list);
	}

	changeItem = function(sessionStorageName, newObj, sessionForm, inputName, inputLastName, sessionText, list) {
		sessionForm.addEventListener('submit', function(e) {
			e.preventDefault();

			newObj.name = inputName.value;
			newObj.lastName = inputLastName.value;

			_changeItemDo(newObj, sessionStorageName, list, inputName, inputLastName, sessionText);
		});
	};

	deleteUsers = function(users, list, sessionStorageName, sessionText, button) {
		button.addEventListener('click', function() {
			sessionStorage.setItem(sessionStorageName, JSON.stringify(list));
			getList(sessionStorageName, sessionText, list);
		});
	};

	return {
		setList: setList,
		getList: getList,
		changeItem: changeItem,
		deleteUsers: deleteUsers
	};

})();