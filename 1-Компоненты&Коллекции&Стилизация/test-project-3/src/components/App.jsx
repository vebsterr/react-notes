import styled from 'styled-components';
import { Button } from './Button';
import { Gi3DMeeple, GiAbstract007, GiAbstract036 } from 'react-icons/gi';
import { Box } from './Box';

const Text = styled.p`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.monospace};
`;

export const App = () => {
  return (
    <>
      <Box m="50px">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, quos
          accusamus corporis voluptates eveniet?
        </Text>
      </Box>
      <Box
        bg="accent"
        m={5}
        width="90%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="normal"
      >
        <Button icon={Gi3DMeeple}>Search</Button>
        <Button icon={GiAbstract007}>Submit</Button>
        <Button icon={GiAbstract036}>Filter</Button>
        <Button type="submit">Show modal</Button>
      </Box>
    </>
  );
};
