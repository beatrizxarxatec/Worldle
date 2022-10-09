var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_pickedWord, _Game_actualWord, _Game_turn, _Game_actualPosition, _Game_validLetterCodes, _Game_interface;
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Interface } from "./Interface.js";
export class Game {
    constructor(pickedWord) {
        _Game_pickedWord.set(this, void 0);
        _Game_actualWord.set(this, void 0);
        _Game_turn.set(this, void 0);
        _Game_actualPosition.set(this, void 0);
        _Game_validLetterCodes.set(this, void 0);
        _Game_interface.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _Game_pickedWord, "f")[i] == __classPrivateFieldGet(this, _Game_actualWord, "f")[i]) {
                    __classPrivateFieldGet(this, _Game_interface, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = () => {
            /*let actualLetter: string = "";
            let pattern: RegExp;
            let numberOfCoincidencesPickedWord: number = 0;
            let numberOfCoincidencesActualWord: number = 0;
            let differenceOfCoincidences: number = 0;
            let isMisplacedLetter: boolean = true;
            for (let i=0; i<MAX_WORD_SIZE; i++){
                isMisplacedLetter = true;
                actualLetter = this.#actualWord[i];
                pattern = new RegExp(actualLetter,"g");
                numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
                numberOfCoincidencesActualWord = (this.#actualWord.match(pattern)||[]).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences==1){
                    for (let j=0; j<MAX_WORD_SIZE; j++){
                        if(this.#pickedWord[j]==actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences==0 && this.#pickedWord[i]==this.#actualWord[i]){
                    isMisplacedLetter=false;
                }
                if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#interface.changeBackgroundPosition(this.#turn, i, "misplacedLetter");
                
            }*/
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                let isMisplacedLetter = false;
                const pickedLetter = __classPrivateFieldGet(this, _Game_pickedWord, "f")[i];
                const actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                if (pickedLetter != actualLetter) {
                    const pattern = new RegExp(pickedLetter, "g");
                    const numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                    const numberOfCoincidencesActualWord = (__classPrivateFieldGet(this, _Game_actualWord, "f").match(pattern) || []).length;
                    const differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                    let soFar = 0;
                    for (let j = 0; j <= i; j++) {
                        if (pickedLetter == __classPrivateFieldGet(this, _Game_pickedWord, "f")[j]) {
                            soFar++;
                        }
                    }
                    if (numberOfCoincidencesActualWord <= soFar) {
                        isMisplacedLetter = true;
                    }
                }
                if (isMisplacedLetter) {
                    __classPrivateFieldGet(this, _Game_interface, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "misplacedLetter");
                }
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    __classPrivateFieldGet(this, _Game_interface, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            __classPrivateFieldSet(this, _Game_turn, __classPrivateFieldGet(this, _Game_turn, "f") + 1, "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        };
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        __classPrivateFieldSet(this, _Game_turn, 1, "f");
        __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_validLetterCodes, ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"], "f");
        __classPrivateFieldSet(this, _Game_interface, new Interface(), "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_pickedWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _Game_pickedWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _Game_actualWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _Game_actualWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_turn, num, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _Game_actualPosition, "f");
    }
    set actualPosition(num) {
        __classPrivateFieldSet(this, _Game_actualPosition, num, "f");
    }
    get validLetterCodes() {
        return __classPrivateFieldGet(this, _Game_validLetterCodes, "f");
    }
    set validLetterCodes(letters) {
        __classPrivateFieldSet(this, _Game_validLetterCodes, letters, "f");
    }
    get interface() {
        return __classPrivateFieldGet(this, _Game_interface, "f");
    }
    set interface(i) {
        __classPrivateFieldSet(this, _Game_interface, i, "f");
    }
    isValidLetter(code) {
        return __classPrivateFieldGet(this, _Game_validLetterCodes, "f").includes(code) && __classPrivateFieldGet(this, _Game_actualPosition, "f") < MAX_WORD_SIZE;
    }
    isEnterKey(code) {
        return code == "Enter";
    }
    isBackspaceKey(code) {
        return code == "Backspace";
    }
    transformCodeToLetter(code) {
        let letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    }
    newLetter(code) {
        let letter = this.transformCodeToLetter(code);
        __classPrivateFieldGet(this, _Game_interface, "f").setNewLetter(this.turn, this.actualPosition, letter);
        __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") + 1, "f");
        __classPrivateFieldSet(this, _Game_actualWord, __classPrivateFieldGet(this, _Game_actualWord, "f") + letter, "f");
    }
    checkWordIsRight() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
    enterPressed() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f").length == MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") > 0) {
            __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") - 1, "f");
            __classPrivateFieldGet(this, _Game_interface, "f").deleteLetter(__classPrivateFieldGet(this, _Game_turn, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"));
        }
    }
    newKeyPressed(code) {
        if (this.isValidLetter(code))
            this.newLetter(code);
        if (this.isEnterKey(code))
            this.enterPressed();
        if (this.isBackspaceKey(code))
            this.backspacePressed();
        __classPrivateFieldGet(this, _Game_interface, "f").changeBackgroundKey(code);
    }
}
_Game_pickedWord = new WeakMap(), _Game_actualWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_actualPosition = new WeakMap(), _Game_validLetterCodes = new WeakMap(), _Game_interface = new WeakMap();
