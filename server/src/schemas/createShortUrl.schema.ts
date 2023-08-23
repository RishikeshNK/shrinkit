import { object, string } from "yup";

export default object({
  body: object({
    url: string().required("URL is required"),
  }),
});
