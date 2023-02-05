import styled from 'styled-components'

const SocialLink = styled.a`
  background: -webkit-linear-gradient(
    left,
    ${(props) => props.theme.accentColorOne},
    ${(props) => props.theme.accentColorTwo}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  margin: 0 50px;
`

export default SocialLink
