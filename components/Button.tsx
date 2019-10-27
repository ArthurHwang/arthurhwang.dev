import styled from "styled-components";

interface Props {
  children: any;
  color?: string | undefined;
  disabled?: boolean;
  type?: any;
}

export const Button: React.FC<Props> = ({
  children,
  color,
  disabled,
  type
}) => {
  return (
    <StyledButton color={color} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")<{ color: string | undefined }>`
  background-color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.secondary;
      case "green":
        return props.theme.accent;
      case "red":
        return props.theme.secondaryAccent;
      case "yellow":
        return props.theme.yellow;
      default:
        return props.theme.grey;
    }
  }};
  color: ${({ theme }) => theme.primary};
  text-shadow: black 0px 0px 3px;
  font-weight: 600;
  padding: 1rem 5rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: transform 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    margin-left: 1rem;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 490px) {
    width: 196px;
  }
`;
