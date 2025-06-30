import Container from "../../components/Container"
import Loading from "../../components/Loading"
import Footer from "../../components/Footer";
import { useSplashRedirect } from "./splashscreen.hook";

export default function Splash() {

  useSplashRedirect();

  return (
    <>
      <Container>
        <Loading text={"Gestão de horas de trabalho de\nestagiários simplificada"} />
      </Container>
      <Footer
        title={""}
        description={""}
        text={""}
        text2={""}
        icon={undefined}
        simple={true}
      />
    </>
  )
}

