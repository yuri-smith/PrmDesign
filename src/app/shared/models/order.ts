import { MyObj } from './my-obj';
import { Company } from '../index';

export interface Order extends MyObj {
    sellerId?: number;
    seller?: Company;
    shopperId?: number;
    shopper?: Company;
}
