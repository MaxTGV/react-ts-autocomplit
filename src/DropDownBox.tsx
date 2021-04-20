import styled from "styled-components";
import { DataType } from "./type";

const StyledDropDownBox = styled.div`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 45px 265px;
  grid-template-rows: auto;
  grid-gap: 10px 0px;
  background: #f9f9f9;
  border-radius: 0px 0px 8px 8px;
`;

const User = styled.div<{ column: string; row: number }>`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  padding: 10px;
  cursor: pointer;
`;

const Image = styled.div<{ column: string; row: number; image: string }>`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  background: no-repeat center / 100% url(${(prop) => prop.image});
  width: 100%;
  border-radius: 50%;
`;

interface IDropDownBox {
  data: DataType;
  handleClick(name: string): void;
}

export const DropDownBox = ({ data, handleClick }: IDropDownBox) => {
  const { users, photos } = data;
  return (
    <StyledDropDownBox>
      {photos &&
        photos.map(({ id, url }, item) => (
          <Image key={id} column="1" row={item + 1} image={url} />
        ))}
      {users &&
        users.map(({ id, name }, item) => (
          <User
            key={id}
            column="2"
            row={item + 1}
            onClick={() => handleClick(name)}
          >
            {name}
          </User>
        ))}
    </StyledDropDownBox>
  );
};
