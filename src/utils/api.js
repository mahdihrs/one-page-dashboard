import axios from 'axios';

// TO DO
export default axios.create({
  baseURL: 'https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard',
  timeout: 30000
});