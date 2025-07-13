import AnimatedCursor from 'react-animated-cursor'

import styled from 'styled-components'
import { theme } from '@/styles/theme.tsx'

type Props = {
  isMobile: boolean
}

export const Cursor = ({ isMobile }: Props) => {
  return (
    <StyledCursor>
      {!isMobile && (
        <AnimatedCursor
          innerSize={10}
          outerSize={25}
          innerScale={1.5}
          outerScale={1.3}
          innerStyle={{
            backgroundColor: theme.colors.font,
          }}
          outerStyle={{
            backgroundColor: ' rgba(0, 0, 255, 1',
          }}
        />
      )}
    </StyledCursor>
  )
}

const StyledCursor = styled.div`
  position: relative;
  z-index: 99999999999;
`
