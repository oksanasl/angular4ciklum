function deleteCookie(getCookie)
{
    var now = new Date();
    now.setMonth( now.getMonth() - 1 );

    document.cookie = getCookie().name + "=" + getCookie.value + "; expires = " + now.toUTCString() + ";";
    return true;
}