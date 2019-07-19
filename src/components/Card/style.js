import styled from "styled-components";

import { color, layout } from "../../constants";

const { spacing } = layout;

const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: ${spacing.md};

  min-height: 120px;
  max-height: fit-content;
`;

const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${spacing.md};

  height: 100%;

  background: ${color.light};
  border-radius: 16px;

  box-shadow: 0 0 10px 1px ${color.grayDarker};
`;

const CardBasePart = styled.div`
  padding: ${spacing.md};

  min-height: 20px;

  background: ${color.light};
`;

const CardTop = styled(CardBasePart)``;

const CardBottom = styled(CardBasePart)``;

export { CardWrapper, CardContainer, CardTop, CardBottom };
