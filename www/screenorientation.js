var screenOrientation =  {
    set: function(str, successCallback, errorCallback) {
		cordova.exec(
            successCallback,
            errorCallback,
            'ScreenOrientation',
            'set',
            [str]
        );
    }
}
module.exports = screenOrientation;