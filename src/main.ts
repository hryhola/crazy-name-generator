import ComBuilder from './ComBuilder';
import fs from 'fs';
import path from 'path';

const chars = 'abcdefghij';  // abcdefghijklmnopqrstuvwxyz
const wordLenght = 3;

const b = new ComBuilder(chars, wordLenght);

b.start().then(res => {
    const str = JSON.stringify(res, null, 2);

    fs.writeFile(path.resolve('./out/out.json'), str, () => console.log('done!'));
});
