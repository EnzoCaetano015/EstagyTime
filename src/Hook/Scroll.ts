import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Isso reposiciona o scroll para o topo da página
  }, [pathname]); // O efeito é acionado sempre que o pathname muda

  return null;
}

export default ScrollToTop;
