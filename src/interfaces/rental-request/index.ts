import { UserInterface } from 'interfaces/user';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface RentalRequestInterface {
  id?: string;
  status: string;
  customer_id: string;
  inventory_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface RentalRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  inventory_id?: string;
}
