const selectPhotoButton = document.getElementById('select-photo-button');
selectPhotoButton.addEventListener('click', function() {
  // prompt user to select a photo using file input
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.click();

  fileInput.addEventListener('change', function() {
    // get selected photo and set as background
    const selectedPhoto = fileInput.files[0];
    document.body.style.backgroundImage = `url(${URL.createObjectURL(selectedPhoto)})`;
  });
});