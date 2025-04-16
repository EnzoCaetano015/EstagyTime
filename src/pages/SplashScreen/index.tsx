import { useEffect } from "react"
import Container from "../../components/Container"
import Loading from "../../components/Loading"
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Splash() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/Home");
    }, 2000);


    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <>
      <Container>
        <Loading text={"Intern work hours management\nmade simple"} />
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

