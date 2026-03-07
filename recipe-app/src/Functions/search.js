export function onSearch(query){
  const { spawn } = require('child_process');
  let args = ['getInfo.py'];
  args.push(query);
  const childProcess = spawn('python', args);
  childProcess.stdout.setEncoding('utf8');
  childProcess.stdout.on('data', (data) => {
      return data;
  })
}
