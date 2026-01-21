import jwt from 'jsonwebtoken';
import { Logger } from 'winston';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-please-chnage-this-in-production ';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';


export const jwttoken = {
    sign: (payload) => {
       
        try{
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        }catch(e){
            Logger.error('Failed to authenticate JWT token', e);
            throw new Error('Error signing JWT token: ');
        }
    },

    verify: (token) => {
       
        try{
            return jwt.verify(token, JWT_SECRET);
        }catch(e){
            Logger.error('Failed to authenticate JWT token', e);
            throw new Error('Error verifying JWT token: ');
        }
    }


}