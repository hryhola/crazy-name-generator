import _ from "lodash";
import Matrix from "./Matrix";

type char = string;

export default class ComBuilder {
    public static MaxStringLength = 8;

    private _characters: char[];
    private _combinationsAmount: number;
    private _wordLenght: number;

    public constructor(characters: char[] | string, wordLength: number = 4) {
        if(typeof characters === 'string') {
            this._characters = _.uniq(characters.split(''));
        } else {
            this._characters = _.uniq(characters);
        }

    
        this._wordLenght = _.min([wordLength, ComBuilder.MaxStringLength])!;
    
        this._combinationsAmount = this._wordLenght ** this._characters.length;
    }

    private async _build (word: string, wordLength: number, combinationsAmount: number, indexArray: number[] = []): Promise<string[]> {
        if (word.length === wordLength) {
            return [word];
        }
        
        const perChunk = combinationsAmount / (wordLength - word.length);

        const promiseArrays = await Promise.all(
            this._characters.map(async (c, i) => this._build(word + c, wordLength, perChunk, [...indexArray, i + 1]))
        );

        return _.flatten(promiseArrays);
        
    }

    public async start(): Promise<string[]> {
        return this._build('', this._wordLenght, this._combinationsAmount);
    }
}
