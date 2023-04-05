const { exec } = require('child_process');

exec('powershell Start-Process cmd -Verb RunAs', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
