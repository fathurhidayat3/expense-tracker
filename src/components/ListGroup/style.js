import styled from "styled-components";
import { layout } from "../../constants";

const { spacing } = layout;

const ListGroup = styled.ul`
  flex: 1;
  list-style: none;

  margin: 0;
  padding: ${spacing.lg} ${spacing.md};
`;

const ListGroupItem = styled.li`
  display: flex;

  margin: 0;
  padding: ${spacing.md} 0 ${spacing.md} ${spacing.sm};
`;

export { ListGroup, ListGroupItem };
