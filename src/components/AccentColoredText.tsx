import styled from 'styled-components'

const AccentColoredText = styled.span`
  background: -webkit-linear-gradient(
    left,
    ${(props) => props.theme.accentColorOne},
    ${(props) => props.theme.accentColorTwo}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) =>
    props.theme.accentText.textShadow === 'unset' ? 'transparent' : 'unset'};
  text-shadow: ${(props) => props.theme.accentText.textShadow};
  letter-spacing: ${(props) => props.theme.accentText.letterSpacing};
  text-transform: ${(props) => props.theme.accentText.textTransform};
`

export default AccentColoredText
