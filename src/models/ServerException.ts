class ServerException {
  private message: string;
  constructor(message: string = '') {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

export default ServerException;
