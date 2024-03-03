function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r[r.length] = m[1];
    return r[0];
}

function setLevel(id) {
    window.location = window.location.pathname + '?level=' + id
}

LEVEL_ONE = `#color1 {
  background-color: red;
}
#color2 {
  background-color:          
}
#color3 {
}
#color4 {
}
#color5 {
}
#color6 {
}`

LEVEL_TWO = `#color1 {
  background-color: red;
}
    
#color2 {
  background-color: orange;
}
    
#color3 {
  background-color: yellow;
}
    
#color4 {
  background-color: green;
}
    
#color5 {
  background-color: blue;
}
    
#color6 {
  background-color: purple;
}`

function resetLevel(id) {
    console.log(id)
    editorText = `Error, loading first page...`

    switch (id) {
        case "1":
            editorText = LEVEL_ONE
            break;
        case "2":
            editorText = LEVEL_TWO
            break;
        default:
            setLevel(1)

    }
    editor.setValue(editorText)

}