import { ReactNode } from 'react';
import * as Styled from "./container.styled"

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <Styled.Container >
      {children}
    </Styled.Container>
  );
}

export default Container;
