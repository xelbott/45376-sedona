var modalWindow = document.querySelector(".modal-window");
var modalWindowControl = document.querySelector(".modal-window-control");
var arrivalDate = modalWindow.querySelector("[name=arrival-date]");
modalWindow.classList.add("modal-window-hide");
modalWindowControl.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalWindow.classList.toggle("modal-window-hide");
});