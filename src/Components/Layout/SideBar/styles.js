import styled from 'styled-components';

import { colors } from "../../../Theme/Colors";
import { metrics } from "../../../Theme/Metrics";

export const Side = styled.aside`
  width: 15vw;
  background-color: ${props => props.theme.colors.gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.section`
   width: 100%;
   height: 60px;
   text-align: center;
   align-self: center;
   padding-top: 30px;
   color: ${props => ( props.active === true ? props.theme.colors.primary : props.theme.colors.gray[1] )};
   font-weight: bold;
   font-size: ${props => props.theme.fonts.size.large};

    &:hover {
      background-color: ${props => props.theme.colors.gray[2]};
      color: ${props => props.theme.colors.secondary}
    }
`;

export const styles = {
    color: colors.secondary,
    sz: metrics.icons.large,
};