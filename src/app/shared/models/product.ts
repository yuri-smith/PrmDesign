import { MyObj } from './my-obj';
import { Order } from '../index';
export interface Product extends MyObj {
    orderId?: number;
    order?: Order;
}
