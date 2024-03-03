function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r[r.length] = m[1];
    return r[0];
}

function setLevel(id) {
    window.location = window.location.pathname + '?level=' + id
}

const level = document.getElementById('levelname');
const desc = document.getElementById('description');


/*
    LEVEL ONE
*/

LEVEL_ONE_TITLE = 'Level 1 - Color Wheel'

LEVEL_ONE_CSS = `#color1 {
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

LEVEL_ONE_DESC = `Welcome to Color Guru! For this first level, we are
going to fill a color wheel using CSS. The first color, red, is done for you.
<br /><br />
<b>Primary Colors:</b> Red, Yellow, and Blue are the first group of colors by which all other
colors on the color wheel are made from.
<br /><br />
<b>Secondary Colors:</b> Orange, Green, and Violet (Purple) are made by mixing two primary colors together.
<br /><br />
<b>Tertiary Colors:</b> Red-Orange, Green-Yellow, etc. are mixed from primary and secondary colors.
Click on two colors to see their combination in the center circle. Click again to deselect.
<br /><br />
<b>Hint:</b> Go clockwise in ROYGBV order!`

/*
    LEVEL TWO
*/

LEVEL_TWO_TITLE = 'Level 2 - Complementary Colors'

LEVEL_TWO_CSS = `#color1 {
  background-color: red;
  color: green;
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

LEVEL_TWO_DESC = `Great job! Now, let's change the color of the numbers.
Use the color property to set the hue of the number to the circle's complementary color. Like before, red is completed for you.
<br /><br />
<b>Complementary Colors:</b> two colors opposite of each other on the color wheel. For example, red and green are complementary.
<br /><br />
<b>Analogous Colors:</b> colors next to each other on the color wheel. For example, red and orange are analogous, as are red and purple.
<br /><br />
<b>Hint:</b> `

/*
    --------
*/

function resetLevel(id) {
    console.log(id)

    editorText = `Error, loading first page...`
    description = `Error loading data...`
    title = `Error`

    switch (id) {
        case "1":
            editorText = LEVEL_ONE_CSS
            description = LEVEL_ONE_DESC
            title = LEVEL_ONE_TITLE
            break;
        case "2":
            editorText = LEVEL_TWO_CSS
            description = LEVEL_TWO_DESC
            title = LEVEL_TWO_TITLE
            break;
        default:
            setLevel(1)

    }
    editor.setValue(editorText)

    level.innerText = title
    desc.innerHTML = description

}