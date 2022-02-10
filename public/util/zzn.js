async function loadScript(url, callback) {
    return new Promise((resolve) => {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    if (callback) {
                        callback();
                        resolve();
                    }
                }
            };
        } else {
            //Others
            script.onload = function () {
                if (callback) {
                    callback();
                    resolve();
                }
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
}
const serverURL = "http://127.0.0.1:4000"
class ZZN {
    async init({debug=false,loadLib="jquery,gsap,opay2,nblib"}) {
        const url = serverURL+"/util/"
        if(!window.jQuery)
            loadScript(url+"jquery.min.js")
        if(!window.gasp)
            loadScript(url+"gsap.min.js")
    }
    getServer(){
        return serverURL
    }
}
window.ZZN = new ZZN()
