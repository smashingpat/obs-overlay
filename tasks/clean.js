import path from 'path';
import rimraf from 'rimraf';


export const cleanDir = () => new Promise(resolve => {
    const dirPath = path.resolve(__dirname, '../dist');
    rimraf(dirPath, resolve);
});
