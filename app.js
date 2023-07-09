const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('img-view');
const dropArea = document.getElementById('drop-area');


const uploadImg = () => {
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imageLink})`;
    imgView.innerHTML = '';
    imgView.style.border = 0;
}

inputFile.addEventListener('change', uploadImg);

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImg();
})