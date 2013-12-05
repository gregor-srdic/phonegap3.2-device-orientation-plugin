/*
THIS IS AN EXAMPLE OF THE PHONEGAP index.js file, that includes a test invocation of the phonegap3.2-device-orientation-plugin
Added lines are #23 and #32-#37
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		app.testOrientation();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    },
	testOrientation: function() {
		var success = function() { console.log('Success'); alert("Success"); };
		var error = function(message) { console.log('Oopsie! ' + message); alert('Oopsie! ' + message); };
		screenOrientation.set('landscape',success,error);
	}
};
