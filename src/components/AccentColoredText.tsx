import styled from 'styled-components'
import { appThemes } from '@/pages/_app'

const AccentColoredText = styled.span<{ variation?: string }>`
  background: -webkit-linear-gradient(
    left,
    ${({ variation = 'primary' }) =>
      variation == 'primary' ? '#a230ef' : '#6ef1f7'},
    ${({ variation = 'primary' }) =>
      variation == 'primary' ? '#c80257' : '#bc5ef2'},
    ${appThemes.dark.accentColorTwo}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: ${(props) => props.theme.accentText.textTransform};
`

export default AccentColoredText
