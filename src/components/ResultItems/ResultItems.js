import { CountryItem } from "./CountryItem/CountryItem";
import { Results, LoadoningIcon, ErrorIcon } from "./StyledResultItems";
import { useQuery } from "react-query";
import { FaCircleNotch } from "react-icons/fa";
import { FaFrown } from "react-icons/fa";

export const ResultItems = ({ param }) => {
  const { input, select } = param;

  let query = input
    ? `${process.env.REACT_APP_NAME}${input}`
    : select
    ? `${process.env.REACT_APP_CONTINENT}${select}`
    : `${process.env.REACT_APP_ALL}`;

  const { isLoading, isError, data, isSuccess } = useQuery(
    ["data", query],
    async () => {
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  if (isLoading) {
    return (
      <LoadoningIcon>
        <FaCircleNotch />
      </LoadoningIcon>
    );
  }

  if (isError) {
    return (
      <ErrorIcon>
        <FaFrown />
      </ErrorIcon>
    );
  }

  return (
    <Results>
      {data && isSuccess && !isLoading
        ? data.map((item) => (
            <CountryItem result={item} key={item.name.common} />
          ))
        : null}
    </Results>
  );
};
