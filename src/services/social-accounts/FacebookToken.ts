import IToken from "../../interfaces/IToken";

class FacebookToken implements IToken {
    getToken() {
        throw new Error("Method not implemented.");
    }
}

export default FacebookToken;