import { get } from "lodash";

const formatGraphQLErrors = (error) => {
  const errorDetails = get(error, "originalError.response.body");
  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}

  return null;
};

export default formatGraphQLErrors;
