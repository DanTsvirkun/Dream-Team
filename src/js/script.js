var body = document.getElementById('body');
var modal = document.getElementById('myModal');
var span = document.getElementById('close');
function showModal() {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
}
span.onclick = function () {
    modal.style.display = 'none';
    body.style.overflow = 'visible';
};
window.onclick = function (event) {
    console.log(event.target);
    if (event.target == modal) {
        modal.style.display = 'none';
        body.style.overflow = 'visible';
    }
};