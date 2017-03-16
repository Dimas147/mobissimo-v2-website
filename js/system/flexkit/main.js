var body = document.body;

var flexkit = flexkit.init({
    chooseBoxStyle: true, // make nice styles for checkbox and radio
    //loadScript: ['hammer'],
    //preLoadPage: true
});


var contactClick = false;

helper.addEvent('click', '[href^="mailto:"], [href^="tel:"]', function () {
    contactClick = true;
});

// It begins at the start of the update page
window.onbeforeunload = function () {
    if (!contactClick) {
        flexkit.showLoader(device.type);
    }
    contactClick = false;
};

// Begins executed when the page is loaded
window.onload = function () {
    flexkit.hideLoader(device.type);
};
