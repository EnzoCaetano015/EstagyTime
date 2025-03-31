import { useEffect } from "react"
import Container from "../../components/Container/Container_Comp"
import Footer from "../../components/Footer/Footer_Comp"
import Loading from "../../components/Loading/Loading_Comp"
import { useNavigate } from "react-router-dom";

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
      <Footer />
    </>
  )
}

