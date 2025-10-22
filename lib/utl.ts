import queryString from "query-string";
import qs from "query-string";

interface URlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface URlRemoveParams {
  params: string;
  keys: string[];
}
export const formUrlQuery = ({ params, key, value }: URlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysformUrlQuery = ({ params, keys }: URlRemoveParams) => {
  const queryString = qs.parse(params);
  keys.forEach((key: string) => {
    delete queryString[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
