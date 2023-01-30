import { post } from '../http/HTTPWrapper';

export const requestVerificationLink = ({ email }) =>
  post('/api/request_verification', { email });
