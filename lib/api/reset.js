import { post } from '../http/HTTPWrapper';

export const requestResetLink = ({ email }) =>
  post('/api/request_reset', { email });
export const resetPassword = ({ password }) => post('/api/reset', { password });
