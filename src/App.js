import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "./api";
import { DropDownBox } from "./DropDownBox";
import { Input } from "./Input";
import { Loader } from "./Loader";

const ContentContainer = styled.div`
  margin: 30px auto;
  width: 343px;
  height: auto;
`;

export const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsClicked(false);
  };

  const handleClick = (name) => {
    setValue(name);
    setData();
    setIsClicked(true);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(value);
      setData(data);
    };
    loadData();
  }, [value]);

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
