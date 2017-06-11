var getIdCookie = function () {
    return JSON.parse('{"name": "oksitcID", "value": "lasjdhlfajw23423521123"}');
}

function setCookie(getCookie)
{
    var cookieString = getCookie().name + "=" + getCookie().value;
    document.cookie = cookieString;
    return true;
}