import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './styles/global';
import * as C from './style';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

const App = () => {
  const [theme,setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <Global />

      <C.Container>
        <C.Content>

          <C.ProfileAvatar src={"https://media.tenor.com/qJfrBnMBd3cAAAAd/pfp.gif"} alt={"Profile Avatar"}/>
          <C.ProfileName>@Z4Dev</C.ProfileName>
          <Toggle
            className="meu-toggle"
            checked={theme.title === 'light' ? true : false}
            icons={{
              checked: <ImSun color={"white"} size={12} />,
              unchecked: <BsFillMoonStarsFill size={12} color={"white"} />,
            }}
            onChange={() => setTheme(theme.title === 'light' ? dark : light)}
          />

          <C.Button>Inscreva-se no NLW</C.Button>
          <C.Button>Baixe meu e-book</C.Button>
          <C.Button>Veja o meu portfólio</C.Button>

          <C.SocialMedia>
            <a href="https://github.com/Z4Dev" target="_blank"><AiFillGithub size={26} color={theme.colors.icons} /></a>
            <a href="https://github.com/Z4Dev" target="_blank"><AiOutlineInstagram size={26} color={theme.colors.icons} /></a>
            <a href="https://github.com/Z4Dev" target="_blank"><AiFillYoutube size={26} color={theme.colors.icons} /></a>
            <a href="https://github.com/Z4Dev" target="_blank"><AiFillLinkedin size={26} color={theme.colors.icons} /></a>
          </C.SocialMedia>

          <C.WaterMark>Feito com ♥ para quem quiser estudar</C.WaterMark>

        </C.Content>
      </C.Container>
    </ThemeProvider>
  )
}

export default App;