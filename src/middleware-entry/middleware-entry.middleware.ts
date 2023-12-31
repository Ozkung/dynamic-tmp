import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewareEntryMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      `[Requset at ${new Date().toLocaleString('th-Th')}]method ==> ${
        req.method
      } as path "${req.originalUrl}".`,
    );
    next();
  }
}
