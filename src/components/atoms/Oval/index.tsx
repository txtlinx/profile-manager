import styled from 'styled-components';

type OvalProps = {
  isTrue: boolean;
};

const StyledOval = styled.div<OvalProps>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.isTrue ? '#00885A' : '#B71C1C')};
  border-radius: 50%;
`;

const Oval: React.FC<OvalProps> = ({ isTrue }) => {
  return <StyledOval isTrue={isTrue} />;
};

export default Oval;
