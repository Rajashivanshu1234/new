let scanner = new Instascan.Scanner({
    video: document.getElementById('preview')
});

scanner.addListener('scan', function(content) {
    document.getElementById('output').innerText = content;
});

document.getElementById('startBtn').addEventListener('click', () => {
    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            alert('No camera found');
        }
    }).catch(function(e) {
        console.error(e);
    });
});