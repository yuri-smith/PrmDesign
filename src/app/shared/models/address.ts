import { City } from './index';
export interface Address {
    id?: number;
    cityId?: number;
    city?: City;
    street?: string;
    build?: string;
    office?: string;
}
