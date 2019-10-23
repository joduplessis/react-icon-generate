var fs = require('fs');
var path = "./icons";
 
fs.writeFile("./icons/index.js", '', () => {
    fs.readdir(path, function(err, items) { 
        for (var i=0; i<items.length; i++) {
            const item = items[i].split('.')[0]
            const line = `export { ${item} } from './${item}'\n`;
            fs.appendFile('./icons/index.js', line, err => console.log(err))
        }
    })
})
