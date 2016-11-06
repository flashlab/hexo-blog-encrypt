function decryptAES() {
    var pass = document.getElementById("pass");
    try {
        var content = CryptoJS.AES.decrypt(document.getElementById("encrypt-blog").innerHTML.trim(), pass.value);
        content = content.toString(CryptoJS.enc.Utf8);
        content = decodeBase64(content);
//        console.log(content);
        content = unescape(content);
        if (content == '') {
            pass.value = '';
        } else {
            document.getElementById("encrypt-blog").style.display    = "inline";
            document.getElementById("encrypt-blog").innerHTML        = content;
            document.getElementById("encrypt-message").style.display = "none";

            document.getElementById("security").style.display        = "none";
            document.getElementById("toc-div").style.display         = "inline";
        }
    } catch (e) {
        pass.value = '';
    }
}

function htmlDecode (str) {
    var s = "";
    if (str.length == 0) return "";

    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g,   "<");
    s = s.replace(/&gt;/g,   ">");
    s = s.replace(/&nbsp;/g, "    ");
    s = s.replace(/'/g,      "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g,   "\n");
    return s;
}

function decodeBase64(content) {
    content = CryptoJS.enc.Base64.parse(content);
    content = CryptoJS.enc.Utf8.stringify(content);
    return content;
}

// add enter to decrypt
console.log('register');
document.getElementById("pass").onkeyup = function(keyPressEvent) {
//    console.log(keyPressEvent.keyCode === 13);
    if (keyPressEvent.keyCode === 13 || this.value.length == 6) {
        decryptAES();
    }
};