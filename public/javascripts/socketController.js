//app.controller('SocketController', ['$scope', 
//    function ($scope) {
app.controller('SocketController', [
    function () {
        var socket = io();
        this.appData = {};
        
        this.sendMessage = function(){
            socket.emit('chat.message', this.message);
            console.log('===> ', this.message);
        };
        
    }]);