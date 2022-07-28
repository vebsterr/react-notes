import styled from 'styled-components';
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};

  cursor: ${p => {
    if (p.disabled) {
      return 'auto';
    } else {
      return 'pointer';
    }
  }};

  :hover:not(:disabled) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.white};
  }
`;

export const Button = ({
  icon: Icon = null,
  disabled = false,
  type = 'button',
  children,
}) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {Icon && <Icon size="15px" />}
      {children}
    </StyledButton>
  );
};
