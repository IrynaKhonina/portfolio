import { createGlobalStyle } from 'styled-components'
import { theme } from '@/styles/theme'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

export const GlobalStyles = createGlobalStyle`
    /* Базовый сброс и box-model */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;

        @media ${theme.media.tablet} {
            &:hover {
                all: unset;
            }
        }
    }

    /* Корневые элементы */
    :root {
        background-color: ${theme.colors.primaryBg};
    }

    html, body, #root {
        min-height: 100vh;
        min-width: 360px;
        background-color: inherit;
    }

    /* Стили для body */
    body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: ${theme.colors.font};
        line-height: 1.2;
        background-color: ${theme.colors.primaryBg};

        &:focus-visible {
            outline: 1px solid ${theme.colors.font};
        }
    }

    /* Автозаполнение форм */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.colors.font};
        -webkit-box-shadow: 0 0 0 1000px ${theme.colors.secondaryBg} inset;
        transition: background-color 5000s ease-in-out 0s;
        background: -webkit-linear-gradient(
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 255, 1) 50%,
                rgba(255, 255, 255, 0) 51%,
                rgba(0, 0, 255, 1) 100%
        );
    }

    /* Базовые стили элементов */
    a {
        text-decoration: none;
        color: ${theme.colors.font};
    }

    ul {
        list-style: none;
    }

    button, input, textarea {
        all: unset;

        &:focus-visible {
            outline: 1px solid ${theme.colors.font};
        }
    }

    /* Секции */
    section {
        padding-bottom: 100px;

        @media ${theme.media.mobile} {
            padding-bottom: 70px;
        }

        &:nth-of-type(odd) {
            background-color: ${theme.colors.primaryBg};
        }

        &:nth-of-type(even) {
            background-color: ${theme.colors.secondaryBg};
        }
    }
`