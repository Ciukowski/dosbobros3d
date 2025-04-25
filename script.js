
document.getElementById('generateBtn').addEventListener('click', function() {
    let upload = document.getElementById('upload');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    if (upload.files && upload.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            let img = new Image();
            img.onload = function() {
                // Rysowanie obrazu na canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Przykładowa logika generowania 3D
                // Możesz dodać kod do generowania modelu 3D na podstawie obrazu
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(upload.files[0]);
    }
});
