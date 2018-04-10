module.exports = function() {
    const fs = require('fs');
    
    var targetFileName = 'smtpConfig.js'; 
   /* var rstream = fs.createReadStream('fbConfigTemplate.js');*/
    var template = "module.exports = {user:, pass:}";
    var wstream = fs.createWriteStream(targetFileName);
    var warningMsg = "//this file must not be commited to version control system. gitignore in this folder has been set to ignore this file\n";
    wstream.write(warningMsg);
     wstream.write(template);
   /* rstream.pipe(wstream);*/
}
