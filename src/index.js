const { exec } = require('child_process');

// comando para listar os serviços do Windows
const command = 'Get-Service -Name "spooler*';

// criar um processo filho do PowerShell e enviar o comando
const ps = exec(`powershell.exe ${command}`);

// capturar a saída do comando
ps.stdout.on('data', (data) => {
  console.log(`Saída: ${data}`);
});

// capturar erros, se houver
ps.stderr.on('data', (data) => {
  console.error(`Erro: ${data}`);
});

// quando o processo filho é finalizado
ps.on('close', (code) => {
  console.log(`Processo finalizado com código ${code}`);
});
