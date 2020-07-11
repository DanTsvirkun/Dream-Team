var body = document.getElementById('body');
var modal = document.getElementById('myModal');
var span = document.getElementById('close');
function showModal() {
  window.addEventListener('keydown', closeModalByESC);
  modal.style.display = 'flex';
  body.style.overflow = 'hidden';
}

function closeModalByESC(e) {
  if (e.code === 'Escape') {
    modal.style.display = 'none';
    body.style.overflow = 'visible';
    window.removeEventListener('keydown', closeModalByESC);
  }
}
span.onclick = function () {
  modal.style.display = 'none';
  body.style.overflow = 'visible';
  window.removeEventListener('keydown', closeModalByESC);
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    body.style.overflow = 'visible';
    window.removeEventListener('keydown', closeModalByESC);
  }
};
