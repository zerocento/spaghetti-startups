import { post } from '../http/HTTPWrapper';

export const signup = (body) => post('/api/signup', body);
