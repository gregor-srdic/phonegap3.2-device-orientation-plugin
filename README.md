phonegap3.2-device-orientation-plugin
=====================================

This plugin enables you to lock your screen orientation to either landscape or portrait from javascript on Phonegap 3.2 for Android.

Tested with Phonegap 3.2

Developed using code from: https://groups.google.com/forum/#!topic/phonegap/LsztccN3RpA
And following the tutorial from: http://devgirl.org/2013/09/17/how-to-write-a-phonegap-3-0-plugin-for-android/

Installation:

1. Move to your phonegap project folder and run (after you have created the project and added the android platform):
	phonegap local plugin add https://github.com/gregor-srdic/phonegap3.2-device-orientation-plugin.git

2. Now you can use screenOrientation.set() method as follows (after the deviceready event has been emited):
	var success = function() { console.log('Success'); alert("Success"); };
	var error = function(message) { console.log('Oopsie! ' + message); alert('Oopsie! ' + message); };
	screenOrientation.set('landscape',success,error);	
	
* Seems that callback functions are not working and I haven't managed to figure out why that is just yet.
