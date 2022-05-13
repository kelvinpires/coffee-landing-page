import { Header } from "./components/Header";
import { Main } from "./components/Main";

import BlurTopImg from "./assets/blur-2.png";
import BlurBottomImg from "./assets/blur-1.png";
import { AppContainer, BlurBottom, BlurTop } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <BlurTop src={BlurTopImg} />
      <Header />
      <Main />
      <BlurBottom src={BlurBottomImg} />
    </AppContainer>
  );
}

export default App;
