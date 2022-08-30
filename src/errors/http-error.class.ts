export class HTTPError extends Error {
  statusCode: number;
  context?: string;

  constructor(statosCode: number, message: string, context?: string){ 
    super(message);
    this.statusCode = statosCode;
    this.message = message;
    this.context = context;
  }
}