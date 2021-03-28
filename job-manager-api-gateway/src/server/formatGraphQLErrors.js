import { get } from "lodash";

const formatGraphQlErrors = (error) => {
  const errorDetails = get(error, "originalError.reponse.body");

  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}

  return null;
};

export default formatGraphQlErrors;
