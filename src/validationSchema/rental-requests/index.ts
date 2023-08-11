import * as yup from 'yup';

export const rentalRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  inventory_id: yup.string().nullable().required(),
});
