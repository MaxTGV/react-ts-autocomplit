import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "./api";
import { DropDownBox } from "./DropDownBox";
import { Input } from "./Input";
import { Loader } from "./Loader";
import { DataType } from "./type";

const ContentContainer = styled.div`
  margin: 30px auto;
  width: 343px;
  height: auto;
`;

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<DataType>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsClicked(false);
  };

  const handleClick = (name: string) => {
    setValue(name);
    setData(undefined);
    setIsClicked(true);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData(value);
        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    loadData();
  }, [value]);

  if (error) {
    return <>ERROR: {error.message}</>;
  }

  return (
    <ContentContainer>
      <Input value={value} handleChange={handleChange} />
      {!data && value && <Loader />}
      {data && !isClicked && (
        <DropDownBox data={data} handleClick={handleClick} />
      )}
    </ContentContainer>
  );
};
