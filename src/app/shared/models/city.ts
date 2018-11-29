import { MyObj } from './my-obj';
import { Country } from '../index';

export interface City extends MyObj {
    countryId?: number;
    country?: Country;
}
