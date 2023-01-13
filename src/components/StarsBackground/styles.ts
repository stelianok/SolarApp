import styled from 'styled-components/native';
import StarsSVG from '../../../assets/images/StarsBackMobile.svg';

export const StarsContainer = styled.SafeAreaView`
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  margin: auto;
`;

export const Stars = styled(StarsSVG)`
  width: 45px;
  height: 45px;
`;
