import React from 'react'
import { Container, SectionText, SectionTitle } from '@/components'
import { Fade } from 'react-awesome-reveal'
import photo from '@/assets/second-photo.webp'
import { S } from './about-me_styles'
import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const { t } = useTranslation('aboutMe')

  const paragraphs = React.useMemo(
    () => [1, 2, 3, 4].map(num => t(`text${num}`)),
    [t]
  )

  return (
    <S.AboutMe id="aboutMe">
      <Container>
        <SectionTitle>{t('title')}</SectionTitle>
        <Fade cascade damping={0.1} triggerOnce>
          <S.Wrapper>
            <SectionText>
              {paragraphs.map((text, index) => (
                <React.Fragment key={`para-${index}`}>
                  {text}
                  {index < paragraphs.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </SectionText>
            <S.Photo
              src={photo}
              alt={t('photoAlt', 'Profile photo')}
              loading="lazy"
              width={350}
              height={467}
              decoding="async"
            />
          </S.Wrapper>
        </Fade>
      </Container>
    </S.AboutMe>
  )
}