import { EOL, homedir, userInfo, arch, cpus } from 'os'
export const osOperation = (flagName) => {
  switch (flagName) {
    case '--EOL':
      console.log(`EOL: ${EOL === '\r\n' ? '\\r\\n' : '\\n'}`);
      break;
    case '--cpus':
      const osCpus = cpus();
      console.log(`Number of CPU: ${osCpus.length}`);
      osCpus.map((cpu, index) => console.log(`CPU ${index + 1}, Model: ${cpu.model}, Speed: ${cpu.speed / 1000} GHz`))
      break;
    case '--homedir':
      console.log(`Homedir: ${homedir()}`);
      break;
    case '--username':
      console.log(`Username: ${userInfo().username}`);
      break;
    case '--architecture':
      console.log(`CPU architecture: ${arch()}`);
      break;
    
    default:
      console.error('Invalid os operation')
  }
}