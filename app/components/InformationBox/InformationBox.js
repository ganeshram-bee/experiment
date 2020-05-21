import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BulbImg from './bulb.svg';
import FlagImg from './ic_redflag.svg';
import Qimg from './ic_question.svg';

const LabelCon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: solid ${props => (props.noBorder ? '0px' : '1px')}
    ${props => (props.strictInfo ? '#f5caae' : '#c8d0ef')};
  background-color: #fff;
  text-align: start;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  ${props => (props.btm ? `margin-bottom: ${props.btm}px;` : '')}
  > table {
    width: 100%;
    > tbody > tr > td {
      &:first-child {
        width: 30px;
        text-align: center;
      }
      &:last-child {
        position: relative;
      }
      > img {
        width: 16px;
        position: absolute;
        top: 6px;
        left: 8px;
      }
      > p {
        font-size: 12px;
        color: #6b6f86;
        margin: 0;
        font-weight: 500;
        line-height: 1.67;
        padding: 4px;
        margin-right: 30px;
      }
    }
  }
`;

const InfoP = styled.p`
  font-size: 12px;
  color: #6b6f86;
  margin: 0;
  font-weight: 500;
  line-height: 1.67;
  padding: 4px;
  margin-right: 30px;
  > span {
    font-weight: 600;
    font-size: 13px;
  }
  ${props => (props.strictInfo ? 'font-style:italic;' : null)}
`;

const LiICon = styled.div`
  width: 13px;
  position: absolute;
  right: 3%;
  bottom: 4px;
`;

const HrefLink = styled.span`
  font-size: 12px;
  color: #f2b100;
  margin: 0;
  font-weight: 500;
  line-height: 1.67;
`;

export default function CautionInfo(props) {
  const {
    txt,
    btm,
    strictInfo,
    link,
    hrefTxt,
    onClickTxt,
    onClickHelp,
  } = props;
  return (
    <LabelCon btm={btm} strictInfo={strictInfo}>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={strictInfo ? FlagImg : BulbImg} alt="Info image" />
            </td>
            <td>
              <InfoP strictInfo={strictInfo}>
                <span> 
                    {txt} 
                </span>
              </InfoP>
            </td>
          </tr>
        </tbody>
      </table>
    </LabelCon>
  );
}

CautionInfo.defaultProps = {
  txt: 'Important Instructions',
  strictInfo: false,
};

CautionInfo.propTypes = {
  btm: PropTypes.string,
  txt: PropTypes.string.isRequired,
  strictInfo: PropTypes.bool,
  link: PropTypes.bool,
  hrefTxt: PropTypes.string,
  onClickHelp: PropTypes.func,
  onClickTxt: PropTypes.func,
};
