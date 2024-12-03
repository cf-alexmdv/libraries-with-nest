import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CustomHeader = createParamDecorator(
  (data: unknown, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    return request?.headers?.['x-custom-header'] || 'not-sent';
  },
);
