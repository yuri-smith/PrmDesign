import { Address } from './address';
export interface CompanyProfile {
    id?: number;
    companyId?: number;
    legalAddress?: Address;
    actualAddress?: Address;
}
