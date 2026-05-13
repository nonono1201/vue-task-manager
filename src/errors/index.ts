export class AppError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'AppError';
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'データが見つかりませんでした') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class BusinessError extends AppError {
  constructor(message = 'データが見つかりませんでした') {
    super(message);
    this.name = 'NotFoundError';
  }
}