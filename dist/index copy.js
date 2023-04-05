// src/index copy.js
var { exec } = require("child_process");
var command = 'Get-Service -Name "spooler*';
var ps = exec(`powershell.exe ${command}`);
ps.stdout.on("data", (data) => {
  console.log(`Sa\xEDda: ${data}`);
});
ps.stderr.on("data", (data) => {
  console.error(`Erro: ${data}`);
});
ps.on("close", (code) => {
  console.log(`Processo finalizado com c\xF3digo ${code}`);
});
