import type { Request } from 'express';

import type { IAuthenticatedUser } from './user.js';

interface IAuthenticatedRequest extends Request {
  user?: IAuthenticatedUser;
}

interface IFetchIdeaRequest extends Request {
  query: {
    limit?: string;
    cursor?: string;
  };
}

export type { IAuthenticatedRequest , IFetchIdeaRequest  };
