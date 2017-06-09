import { argv } from 'yargs';
import searchPort from './utils/search-port';


export let config = {
    open: argv.open || false,
    port: argv.port || 1337,
    serverPort: argv.serverPort || 8080,
    inspect: argv.inspect || false,
}

export const configureConfig = () => new Promise(async (resolve) => {
    const port = await searchPort(config.port);
    const serverPort = await searchPort(config.serverPort);

    config.port = port;
    config.serverPort = serverPort;

    resolve(config);
})

export default config;
