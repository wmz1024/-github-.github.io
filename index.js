function GetQueryString(api) {
    var reg = new RegExp("(^|&)" + api + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var sname = GetQueryString("i");
if (sname != null) {
    var sname_ = decodeURIComponent(sname);
}
document.write("<script> 　　function IFrameReSize(iframename) {var pTar = document.getElementById(iframename);if (pTar) { if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {pTar.height = pTar.contentDocument.body.offsetHeight;} else if (pTar.Document && pTar.Document.body.scrollHeight) {pTar.height = pTar.Document.body.scrollHeight;}}}function IFrameReSizeWidth(iframename) {var pTar = document.getElementById(iframename);if (pTar) { if (pTar.contentDocument && pTar.contentDocument.body.offsetWidth) {pTar.width = pTar.contentDocument.body.offsetWidth;} else if (pTar.Document && pTar.Document.body.scrollWidth) {pTar.width = pTar.Document.body.scrollWidth;}}}</script>")

if (sname=="Selectbox")
{
    document.write('<iframe src="iframe/1.htm" scrolling=“no” frameborder=“0” height=“100%” id=“mainFrame” width=“100%” οnlοad=‘IFrameReSize(“mainFrame”);IFrameReSizeWidth(“mainFrame”);’></iframe>')
}
else if (sname=="p@$$w*od")
{
    document.write('<iframe src="iframe/2.html" scrolling=“no” frameborder=“0” height=“100%” id=“mainFrame” width=“100%” οnlοad=‘IFrameReSize(“mainFrame”);IFrameReSizeWidth(“mainFrame”);’></iframe>')
}
else 
{
    document.write("<h1>你需要输入参数<h1>")
}