var modalWindow = document.querySelector(".modal-window");
var modalWindowControl = document.querySelector(".modal-window-control");
var searchForm = modalWindow.querySelector(".search");
var arrivalDate = modalWindow.querySelector("[name=arrival-date]");
var departureDate = modalWindow.querySelector("[name=departure-date]");
var adultsNumber = modalWindow.querySelector("[name=adults-number]");
var childrenNumber = modalWindow.querySelector("[name=children-number]");
modalWindow.classList.add("modal-window-hide");

modalWindowControl.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (storageAdults) {
		adultsNumber.value = storageAdults;
	}
	if (storageChildren) {
		childrenNumber.value = storageChildren;
	}
	modalWindow.classList.toggle("modal-window-hide");
	modalWindow.classList.remove("modal-window-error");
});

searchForm.addEventListener("submit", function(evt) {
	if (!arrivalDate.value || !departureDate.value || !adultsNumber.value || !childrenNumber.value) {
		evt.preventDefault();
		modalWindow.classList.remove("modal-window-error");
		modalWindow.offsetWidth = modalWindow.offsetWidth;
		modalWindow.classList.add("modal-window-error");
	}
	else {
		localStorage.setItem("adults", adultsNumber.value);
		localStorage.setItem("children", childrenNumber.value);
	}
});

var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");
