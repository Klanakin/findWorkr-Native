export class UserInputControl {
    private formIsReady: boolean;

    constructor(isFulfilled: boolean) {
        this.formIsReady = isFulfilled;
    }

    activateButton(): boolean {
        return this.formIsReady;    
    }
}
