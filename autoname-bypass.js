let username = "";
 
const nativeWebSocket = window.WebSocket;
window.WebSocket = function() {
	const ws = new nativeWebSocket(...arguments);
	const nativeSend = ws.send;
	const proxiedSend = function() {
		const interceptedMessage = JSON.parse(arguments[0]);
		if (interceptedMessage[0] && interceptedMessage[0].data && interceptedMessage[0].data.name) {
			interceptedMessage[0].data.name = username;
		}
 
		return nativeSend.apply(this, [JSON.stringify(interceptedMessage)]);
	};
 
	ws.send = proxiedSend;
	return ws;
};
 
const nativePushState = history.pushState;
history.pushState = function(state) {
	let n;
	while (!n) {
		n = window.prompt("Enter your username");
	}
	username = n;
 
	return nativePushState.apply(history, arguments);
};
