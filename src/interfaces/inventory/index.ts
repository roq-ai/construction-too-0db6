import { RentalRequestInterface } from 'interfaces/rental-request';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  tool_name: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  rental_request?: RentalRequestInterface[];
  company?: CompanyInterface;
  _count?: {
    rental_request?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_name?: string;
  company_id?: string;
}
