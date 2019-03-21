import { Pool } from 'pg';
import dotenv from 'dotenv';
import con from './con_file';

dotenv.config();
const config = con.getConnectionConfig();
class Connection {
  constructor() {
		console.log(config);
    this.getPoolConnection = () => new Pool(config);
  }
}
export default new Connection();
