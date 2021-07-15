import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJs, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela com o código"
    />
  </S.Wrapper>
)

export default Main
