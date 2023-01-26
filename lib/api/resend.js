import { post } from '../http/HTTPWrapper';

export const resend = ({ email }) => post('/api/resend', { email });
