import fs from "fs";
import path from "path";

import _ from "lodash";

const matrixPath = path.join('./out/matrix');

class Matrix {
    static height = 2n;
    static width = 2;

    static init(height: bigint, width: number) {
        Matrix.height = height;
        Matrix.width = width;
        Matrix.clear();
    }

    static clear() {
        fs.truncateSync(matrixPath, 0);

        const placeholder = _.times(Matrix.width, _.constant('_')).join('') + '\n';

        console.log(placeholder)

        for (let i = 0n; i < Matrix.height; i++) {
            fs.appendFileSync(matrixPath, placeholder);
        }
    }

    write(position: bigint, word: string) {
        
    }
}

export default Matrix;

