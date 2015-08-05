$(document).ready(function() {
    app();
    var modal = betterModal();

    var sessionKey = "ghost:session";
    function getLocalStorage(key) {
        var item = localStorage.getItem(key);
        return item ? JSON.parse(item) : false;
    }
    function isAuthenticated() {
        var ghostSession = getLocalStorage(sessionKey);
        return ghostSession && new Date < new Date(ghostSession.expires_at);
    }

    //document.getElementById('appHeader').style.background = (isAuthenticated()) ? "blue" : "white";

    ///----handle the modals

    //---Open the modal on "+" click

});