import * as yup from "yup";

const schemaForm = yup.object().shape({
  lname: yup.string().min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "xlarge"], "you must choose a size"),
  side: yup
    .string()
    .oneOf(
      ["OriginalRed", "GarlicRanch", "BBQSauce", "SpinachAlfredo"],
      "you must choose a sauce"
    ),
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  request: yup.string(),
});

export default schemaForm;
