export class HTMLshl{
    static highlight(htmlString){
        return "<pre>" + htmlString.replaceAll(/(<(.*?)>)/gmis, function(a, m, p1){
            return "<span class=\"tag\">&lt;" + p1.replaceAll(/(([A-z]*\=)\"([^"]*)\")/gmis, function(a, m, p1, p2){
                return "<span class=\"attribute\">" + p1 + "\"<span class=\"property\">" + p2 + "</span>\"</span>";
            }) + "&gt;</span>";
        }) + "</pre>";
    }
}
