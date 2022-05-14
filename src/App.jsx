import { Header } from "./components/Header";
import { Main } from "./components/Main";

import BlurTopImg from "./assets/blur-2.png";
import BlurBottomImg from "./assets/blur-1.png";
import BlurMobileImg from "./assets/blur-mobile.png";
import { AppContainer, BlurBottom, BlurMobile, BlurTop } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <BlurTop src={BlurTopImg} />
      <Header />
      <Main />
      <BlurBottom src={BlurBottomImg} />
      <BlurMobile src={BlurMobileImg} />
    </AppContainer>
  );
}

export default App;
