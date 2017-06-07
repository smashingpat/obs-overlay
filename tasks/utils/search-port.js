import { createServer } from 'http';

const searchPort = (startingPort = 3000) => new Promise(resolve => {
    let port = startingPort;

    const getPort = () => {
        const server = createServer();
        server.listen(port, () => {
            server.once('close', () => {
                resolve(port)
            });
            server.close();
        });
        server.on('error', () => {
            port++;
            getPort();
        });
    }

    getPort();
});


export default searchPort;
