export class HTMLshl{
    static highlight(htmlString){
        var c = false;
        return "<pre>" + htmlString.replaceAll(/(<(.*?)>)/gmis, function(a, m, p1){
            if(p1?.startsWith("!--") && !c){
                if(p1?.length > 5 && p1?.endsWith("--")){
                    return "<span class=\"comment\">&lt;"+p1+"&gt;</span>";
                }else{
                    c = true;
                    return "<span class=\"comment\">&lt;"+p1+"&gt;";
                }
            }else if(p1?.endsWith("--")){
                c = false;
                return "&lt;"+p1+"&gt;</span>";
            }else if(!c){
                return "<span class=\"tag\">&lt;" + p1.replaceAll(/(\r\n|\r|\n|\s| )([^\=\s]+)(\=\"[^\"]*\"|\=\'[^\']*\'|\=[^\"\'][\w\"\'\-\*\,\.;\:\!\?\^\°\#\+\$\§\%\&\/\(\)\{\}\[\]\=\~\<\>\|\@]*(?=[\r\n|\r|\n|\s| |$])|)/gmis, function(a, m, p1, p2){
                    if(p2){
                        if(p2?.startsWith("=\"") && p2?.endsWith("\"")){
                            return m + "<span class=\"attribute\">" + p1 + "=\"<span class=\"property\">" + p2.substr(2).slice(0, -1) + "</span>\"</span>";
                        }else if(p2?.startsWith("=\'") && p2?.endsWith("\'")){
                            return m + "<span class=\"attribute\">" + p1 + "=\'<span class=\"property\">" + p2.substr(2).slice(0, -1) + "</span>\'</span>";
                        }else{
                            return m + "<span class=\"attribute\">" + p1 + "=<span class=\"property\">" + p2 .substr(1)+ "</span></span>";
                        }
                    }else{
                        return m + "<span class=\"attribute\">" + p1 + "</span>";
                    }
                }) + "&gt;</span>";
            }else{
                return "&lt;"+p1+"&gt;";
            }
        }) + "</pre>";
    }
}
