const selectAudioButton = document.getElementById('select-audio-button');
const audioPlayer = document.getElementById('audio-player');

selectAudioButton.addEventListener('click', function() {
  // prompt user to select an audio file using file input
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.click();

  fileInput.addEventListener('change', function() {
    // get selected audio file and set as source for audio player
    const selectedAudio = fileInput.files[0];
    audioPlayer.src = URL.createObjectURL(selectedAudio);
    audioPlayer.load();
  });
});
