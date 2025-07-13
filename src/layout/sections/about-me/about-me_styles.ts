import styled from 'styled-components'
import { SectionText } from '@/components'
import { theme } from '@/styles/theme'

export const S = {
  AboutMe: styled.section`
    position: relative;
    padding: 100px 0;
    scroll-margin-top: 80px; 
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
    gap: clamp(30px, 4vw, 50px);
    align-items: center;
    margin-top: 50px;

    ${SectionText} {
      display: grid;
      line-height: 1.6;
    }

    @media ${theme.media.tablet} {
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    }

    @media ${theme.media.mobile} {
      grid-template-columns: 1fr;
      
      ${SectionText} {
        text-align: center;
      }
    }
  `,
  Photo: styled.img`
    width: 100%;
    max-width: 350px;
    height: auto;
    aspect-ratio: 3/4;
    border-radius: 24px;
    box-shadow: ${theme.shadow.main};
    object-fit: cover;
    transition: transform 0.3s ease;
    justify-self: center;

    &:hover {
      transform: scale(1.03);
    }

    @media ${theme.media.mobile} {
      max-width: 250px;
      margin-top: 30px;
      display: block; /* Показываем на мобильных, но внизу */
    }
  `
}