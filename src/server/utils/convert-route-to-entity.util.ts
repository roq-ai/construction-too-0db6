const mapping: Record<string, string> = {
  companies: 'company',
  inventories: 'inventory',
  'rental-requests': 'rental_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
