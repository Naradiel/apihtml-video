window.onload = function () {
  // Establecemos las constantes para que sea más fácil de desarrollar nuestro código
  const fileInput = document.getElementById('fileInput');
  const videoPlayer = document.getElementById('videoPlayer');
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');
  const volumeUpButton = document.getElementById('volumeUpButton');
  const volumeDownButton = document.getElementById('volumeDownButton');
  const controls = document.getElementById('controls');
  const loadingMessage = document.getElementById('loadingMessage');

  // Función para cargar el archivo de vídeo
  function loadVideo(file) {
    const fileURL = URL.createObjectURL(file);

    // Controlamos el tipo de archivo que se va a subir
    if (file.type.startsWith('video/')) {
      alert('Cargando archivo de vídeo. Esto puede llevar unos minutos.');

      videoPlayer.src = fileURL;
      videoPlayer.style.display = 'block'; // Mostrar el reproductor de vídeo
      controls.style.display = 'block'; // Mostrar los controles de reproducción
    } else {
      alert('El archivo seleccionado no es un video válido.');
    }
  }

  fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    loadVideo(file);
  });

  // Función para cargar el archivo de vídeo mediante un botón
  const loadButton = document.getElementById('loadButton');
  loadButton.addEventListener('click', function () {
    fileInput.click();
  });

  // Reproducir
  playButton.addEventListener('click', function () {
    videoPlayer.play();
  });

  // Pausar
  pauseButton.addEventListener('click', function () {
    videoPlayer.pause();
  });

  // Subir volumen
  volumeUpButton.addEventListener('click', function () {
    if (videoPlayer.volume < 1.0) {
      videoPlayer.volume += 0.1;
    }
  });

  // Bajar volumen
  volumeDownButton.addEventListener('click', function () {
    if (videoPlayer.volume > 0.0) {
      videoPlayer.volume -= 0.1;
    }
  });
};


