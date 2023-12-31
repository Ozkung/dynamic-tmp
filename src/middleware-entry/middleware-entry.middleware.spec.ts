import { MiddlewareEntryMiddleware } from './middleware-entry.middleware';

describe('MiddlewareEntryMiddleware', () => {
  it('should be defined', () => {
    expect(new MiddlewareEntryMiddleware()).toBeDefined();
  });
});
