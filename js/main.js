var SessionEx = require('./modules/session.js');
var LocalEx = require('./modules/local.js');

(window.onLoad = function() {
	var	localForm = document.getElementById('localForm'),
		localInput = document.getElementById('localInput'),
		localButton = document.getElementById('localButtonClean'),
		localStorageName = 'localText',
		localHeading = document.getElementById('localText'),
		localText = localStorage.getItem(localStorageName);

	LocalEx.localSave(localForm, localInput, localStorageName, localHeading);
	LocalEx.localClear(localButton, localHeading, localText);
	LocalEx.setTextToHeadline(localHeading, localText);

	
	var sessionForm = document.getElementById('sessionForm'),
		inputName = document.getElementById('sessionInputName'),
		inputLastName = document.getElementById('sessionInputLastName'),
		sessionStorageName = 'users',
		obj = [{ "name": "Felipe", "lastName": "Médina" }],
		users = JSON.parse(sessionStorage.getItem(sessionStorageName)),
		sessionText = document.getElementById('sessionText'),
		sessionButton = document.getElementById('sessionButtonClean'),
		list = [],
		newObj = {};

	SessionEx.setList(sessionStorageName, obj);
	SessionEx.getList(sessionStorageName, sessionText, list);
	SessionEx.changeItem(sessionStorageName, newObj, sessionForm, inputName, inputLastName, sessionText);
	SessionEx.deleteUsers(users, list, sessionStorageName, sessionText, sessionButton);
})();
