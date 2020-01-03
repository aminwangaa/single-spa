const mapQuery = (uri) => {
    // url 参数解析
    //window.location.search
    uri = uri && uri.split('#')[0] || window.location.search; //remove hash
    var i,
        key,
        value,
        index = uri.indexOf("?"),
        pieces = uri.substring(index + 1).split("&"),
        params = {};
    if (index === -1) {//如果连?号都没有,直接返回,不再进行处理.
        return params;
    }
    for (i = 0; i < pieces.length; i++) {
        try {
            index = pieces[i].indexOf("=");
            key = pieces[i].substring(0, index);
            value = pieces[i].substring(index + 1);
            if (!(params[key] = (value))) {
                throw new Error("uri has wrong query string when run mapQuery.");
            }
        } catch (e) {
            console.log("错误：[" + e.name + "] " + e.message + ", " + e.fileName + ", 行号:" + e.lineNumber + "; stack:" + typeof e.stack, 2);
        }
    }
    return params;
}

export {
    mapQuery
}
