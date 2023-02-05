import styled from 'styled-components'

const Tag = styled.div`
  padding: 0 20px;
  border-radius: 15px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.secondaryAccentColorOne},
    ${(props) => props.theme.secondaryAccentColorTwo}
  );
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 16px;
  margin: 10px 20px;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 35px;
`

export default Tag
