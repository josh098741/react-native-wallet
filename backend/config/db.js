import {neon} from "@neondatabase/serverless"

import "dotenv/config"

//Creates a SQL connection using our DB URL
const DATABASE_URL = process.env.DATABASE_URL
export const sql = neon(DATABASE_URL)