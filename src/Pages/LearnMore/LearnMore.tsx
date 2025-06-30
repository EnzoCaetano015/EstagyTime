import {
  Clock,
  BarChart3,
  Users,
  Building,
  GraduationCap,
  Calendar,
  Shield,
  ChevronDown,
  CheckCircleIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../utils/Motion";

import Header from "../../components/Header";
import Acordion from "../../components/Acordion";
import { Box, Stack, Typography } from "@mui/material";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

import * as Styled from "./LearnMore.styled"
import { BigTitle } from "../../components/Text";


export default function LearnMore() {
  return (

    <Container>

      <Header />

      <Styled.Main sx={{ background: "linear-gradient(to bottom, #fff, #F8F8FF)" }}>

        <Box
          component={motion.div}
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          viewport={{ once: true }}
          sx={{ m: "0 auto", textAlign: "center" }}
        >

          <BigTitle
            color="purple"
            text="Descubra o StagyTime"
          />

          <Typography sx={{ maxWidth: 600, fontSize: 15, color: "#4B5563", m: "0 auto 2rem" }}>
            Uma plataforma abrangente projetada especificamente para gerenciar horas de trabalho, produtividade e desempenho de estagiários em organizações de todos os tamanhos.
          </Typography>

          <motion.div
            initial={slideInVariant.hidden}
            whileInView={slideInVariant.visible}
            className={"Divider"}
            viewport={{ once: true }}
          />
        </Box>

      </Styled.Main>

      <Styled.Features>
        <Box
          component={motion.div}
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className={"Title"}>
            Recursos abrangentes
          </Typography>

          <Box className={"Grid"}>

            <Card
              icon={<Clock color="#422680" />}
              title={"Controle de Ponto Avançado"}
              text={""}
              isList={true}
              listIcon={<CheckCircleIcon color="#422680" />}
              listTopic={[
                "Sistema simples de entrada/saída com acesso por celular e desktop",
                "Verificação por geolocalização para garantir registros precisos no local",
                "Gestão de pausas e cálculo de horas extras",
                "Atribuição de projetos e tarefas para alocação detalhada das horas"
              ]}
              textlist={""}
            />

            <Card
              icon={<BarChart3 color="#422680" />}
              title={"Relatórios Inteligentes"}
              text={""}
              isList={true}
              listIcon={<CheckCircleIcon color="#422680" />}
              listTopic={[
                "Painéis personalizáveis para supervisores e administradores",
                "Exportação de relatórios em vários formatos (PDF, CSV, Excel)",
                "Análises de produtividade e métricas de desempenho",
                "Relatórios automáticos semanais e mensais"
              ]}
              textlist={""}
            />

            <Card
              icon={<Users color="#422680" />}
              title={"Gestão de Estagiários"}
              text={""}
              isList={true}
              listIcon={<CheckCircleIcon color="#422680" />}
              listTopic={[
                "Perfis completos de estagiários com habilidades e objetivos",
                "Ferramentas de avaliação de desempenho e sistema de feedback",
                "Gestão de documentos como contratos e certificados",
                "Acompanhamento de marcos e reconhecimento de conquistas"
              ]}
              textlist={""}
            />

            <Card
              icon={<Shield color="#422680" />}
              title={"Segurança e Conformidade"}
              text={""}
              isList={true}
              listIcon={<CheckCircleIcon color="#422680" />}
              listTopic={[
                "Controle de acesso baseado em funções para proteção de dados",
                "Conformidade com regulamentações e normas trabalhistas",
                "Criptografia de dados e autenticação segura",
                "Backups regulares e trilhas de auditoria"
              ]}
              textlist={""}
            />

          </Box>
        </Box>
      </Styled.Features>

      <Styled.Benefits >
        <motion.div
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          className={"Container"}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className={"Title"}>
            Por que escolher o StagyTime
          </Typography>

          <Box className={"Grid"} sx={{ p: "1.5rem" }}>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <Building size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                Para Organizações
              </Typography>

              <Typography className={"benefitText"}>
                Reduza a carga administrativa, garanta a conformidade com as leis trabalhistas e obtenha insights valiosos sobre a produtividade e o desempenho dos estagiários.
              </Typography>

            </Box>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <GraduationCap size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                Para Estagiários
              </Typography>

              <Typography className={"benefitText"}>
                Acompanhe facilmente as horas de trabalho, exiba conquistas, receba feedbacks e construa um registro completo da experiência de estágio.
              </Typography>

            </Box>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <Calendar size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                Para Supervisores
              </Typography>

              <Typography className={"benefitText"}>
                Monitore o progresso dos estagiários, forneça feedbacks pontuais, gerencie cronogramas com eficiência e gere relatórios completos de desempenho.
              </Typography>

            </Box>

          </Box>


        </motion.div>

      </Styled.Benefits>


      <Styled.Cases>

        <Box className={"caseContainer"}>

          <Typography variant="h2" className={"caseTitle"}>
            StagyTime em Ação
          </Typography>

          <Box className={"caseGrid"}>

            <motion.div
              initial={fadeInVariant.hidden}
              whileInView={fadeInVariant.visible}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}

            >

              <Card
                icon={""}
                title={"Segurança e Conformidade"}
                text={""}
                isList={true}
                textlist={
                  "Grandes corporações usam o StagyTime para gerenciar programas de estágio sazonais com dezenas de estagiários em diversos departamentos."
                }
                listIcon={<CheckCircleIcon color="#422680" />}
                listTopic={[
                  "Gestão centralizada de funções diversas de estagiários",
                  "Relatórios departamentais e alocação de orçamento",
                  "Integração com sistemas de RH existentes",
                ]}
              />

            </motion.div >

            <motion.div
              initial={fadeInVariant.hidden}
              whileInView={fadeInVariant.visible}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}

            >

              <Card
                icon={""}
                title={"Instituições de Ensino"}
                text={""}
                isList={true}
                textlist={
                  "Universidades e faculdades usam o StagyTime para monitorar estágios estudantis e garantir que cumpram os requisitos acadêmicos."
                }
                listIcon={<CheckCircleIcon color="#422680" />}
                listTopic={[
                  "Controle de carga horária para crédito acadêmico",
                  "Alinhamento com objetivos de aprendizagem",
                  "Painéis de supervisão para docentes",
                ]}
              />

            </motion.div >

            <motion.div
              initial={fadeInVariant.hidden}
              whileInView={fadeInVariant.visible}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}

            >

              <Card
                icon={""}
                title={"Startups e Pequenas Empresas"}
                text={""}
                isList={true}
                textlist={
                  "Empresas em crescimento usam o StagyTime para gerenciar estagiários de forma eficiente e maximizar sua contribuição para o crescimento do negócio."
                }
                listIcon={<CheckCircleIcon color="#422680" />}
                listTopic={[
                  "Gestão de talentos com baixo custo",
                  "Alocação de horas por projeto",
                  "Processo de integração simplificado",
                ]}
              />

            </motion.div >

            <motion.div
              initial={fadeInVariant.hidden}
              whileInView={fadeInVariant.visible}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}

            >

              <Card
                icon={""}
                title={"Organizações Sem Fins Lucrativos"}
                text={""}
                isList={true}
                listIcon={<CheckCircleIcon color="#422680" />}
                textlist={
                  "ONGs usam o StagyTime para coordenar estagiários voluntários e garantir o uso eficiente de recursos limitados."
                }
                listTopic={[
                  "Certificação de horas de voluntariado",
                  "Relatórios para subsídios e conformidade",
                  "Ferramentas de medição de impacto",
                ]}
              />

            </motion.div >

          </Box>
        </Box>
      </Styled.Cases>

      <Styled.Questions>
        <Box className={"questionContainer"}>

          <motion.h2
            initial={fadeUpVariant.hidden}
            whileInView={fadeUpVariant.visible}
            className={"questionTitle"}
            viewport={{ once: true }}
          >
            Perguntas frequentes
          </motion.h2>

          <Stack gap={1}>
            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Como o StagyTime lida com estagiários remotos?"}
                text={
                  "O StagyTime foi desenvolvido tanto para estagiários presenciais quanto remotos. Para trabalhadores remotos, a plataforma oferece verificação de localização com base em IP, captura de tela (opcional) e integração com ferramentas de colaboração virtual para garantir o acompanhamento da produtividade sem comprometer a privacidade."
                }
                children={""}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"O StagyTime pode ser integrado ao nosso software de RH atual?"}
                text={
                  "Sim, o StagyTime oferece integração via API com sistemas populares de RH e folha de pagamento. Nossa plataforma pode sincronizar os dados com seu software atual para evitar duplicidade de registros e garantir consistência nos dados."
                }
                children={""}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"O que diferencia o StagyTime de ferramentas gerais de controle de tempo?"}
                text={
                  "Diferente das ferramentas gerais de controle de tempo, o StagyTime foi criado especificamente para a gestão de estagiários. Ele inclui recursos voltados para exigências educacionais, acompanhamento de desenvolvimento de habilidades, avaliação de desempenho e relatórios específicos para estágios — que não são oferecidos por soluções genéricas."
                }
                children={""}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Quão seguros são os dados armazenados no StagyTime?"}
                text={
                  "O StagyTime utiliza medidas de segurança reconhecidas pelo setor, incluindo criptografia de ponta a ponta, protocolos seguros de autenticação, auditorias regulares de segurança e conformidade com regulamentos de proteção de dados. Todos os dados são armazenados em infraestrutura em nuvem compatível com SOC 2 e passam por backups regulares."
                }
                children={""}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Os estagiários podem acessar seus dados após o término do estágio?"}
                text={
                  "Sim, o StagyTime oferece um recurso de arquivamento que permite às organizações fornecer aos estagiários um registro permanente de seu estágio, incluindo horas trabalhadas, projetos concluídos, habilidades adquiridas e avaliações de desempenho. Isso serve como documentação valiosa para seus portfólios profissionais."
                }
                children={""}
              />
            </motion.div>
          </Stack>

        </Box>
      </Styled.Questions>

      <Footer
        text={""}
        icon={<CheckCircleIcon color="#422680" />}
        description={"Junte-se a centenas de organizações que simplificaram seus programas de estágio"}
        title={"Transforme sua gestão de estágio hoje mesmo"}
        text2={""}
        simple={false}
      />
    </Container>
  );
}
