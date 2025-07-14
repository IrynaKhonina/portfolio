import { Project } from './project'
import styled from 'styled-components'
import imgGame from '@/assets/portfolio/game.webp'
import imgTasks from '@/assets/portfolio/tasks.webp'
import imgNetwork from '@/assets/portfolio/network.webp'
import imgGreenCart from '@/assets/portfolio/greenCart.webp'
import { Container, FlexWrapper, SectionTitle } from '@/components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

export const Portfolio = () => {
  const { t } = useTranslation()

  const projects = [
    {
      name: 'Game catch the google',
      demo: 'https://catch-the-google.vercel.app',
      code: 'https://github.com/IrynaKhonina/CatchTheGoogle',
      photo: imgGame,
      description: `${t('descriptionGame', { ns: 'portfolio' })}`,
    },
    {
      name: 'ChitChat',
      demo: '',
      code: '',
      photo: imgNetwork,
      description: `${t('descriptionSocialNetwork', { ns: 'portfolio' })}`,
    },
    {
      name: 'Todolist',
      demo: 'https://irynakhonina.github.io/todolist/',
      code: 'https://github.com/IrynaKhonina/todolist',
      photo: imgTasks,
      description: `${t('descriptionTodolist', { ns: 'portfolio' })}`,
    },
    {
      name: 'GreenCart',
      demo: 'https://irynakhonina.github.io/greencart/',
      code: 'https://github.com/IrynaKhonina/greencart',
      photo: imgGreenCart,
      description: `${t('descriptionGreenCart', { ns: 'portfolio' })}`,
    },
  ]

  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'portfolio' })}</SectionTitle>
        <Fade>
          <FlexWrapper wrap={'wrap'} justify={'space-evenly'} gap={'20px'} align={'stretch'}>
            {projects.map((project) => (
              <Project
                name={project.name}
                key={project.name}
                description={project.description}
                demo={project.demo}
                code={project.code}
                photo={project.photo}
              />
            ))}
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  position: relative;
`
