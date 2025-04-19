import {
  Clock,
  BarChart3,
  Users,
  Building,
  GraduationCap,
  Calendar,
  Shield,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../utils/Motion";

import Header from "../../components/Header";
import Acordion from "../../components/Acordion";
import { Box, Stack, Typography } from "@mui/material";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

import * as Styled from "./learnMore.styled"
import { BigTitle } from "../../components/Text";


export default function LearnMore() {
  return (

    <Container>

      <Header />

      <Styled.Main sx={{ p: "48px 16px", background: "linear-gradient(to bottom, #fff, #F8F8FF)" }}>

        <Box
          component={motion.div}
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          viewport={{ once: true }}
          sx={{ m: "0 auto", textAlign: "center" }}
        >

          <BigTitle
            color="purple"
            text="Discover StagyTime"
          />

          <Typography sx={{ maxWidth: 600, fontSize: 15, color: "#4B5563", m: "0 auto 2rem" }}>
            A comTypographyrehensive platform designed specifically for managing intern work hours, productivity, and performance in organizations of all sizes.
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
          sx={{ maxWidth: "55%", m: "0 auto" }}
        >
          <Typography variant="h2" className={"Title"}>
            Comprehensive Features
          </Typography>

          <Box className={"Grid"}>

            <Card
              icon={<Clock color="#422680" />}
              title={"Advanced Time Tracking"}
              text={""}
              isList={true}
              listTopic={[
                "Simple clock-in/out system with mobile and desktop access",
                "Geolocation verification to ensure accurate on-site tracking",
                "Break time management and overtime calculation",
                "Project and task assignment for detailed hour allocation"
              ]}
              textlist={""}
            />

            <Card
              icon={<BarChart3 color="#422680" />}
              title={"Insightful Reporting"}
              text={""}
              isList={true}
              listTopic={[
                "Customizable dashboards for supervisors and administrators",
                "Export reports in multiple formats (PDF, CSV, Excel)",
                "Productivity analytics and performance metrics",
                "Automated weekly and monthly summary reports"
              ]}
              textlist={""}
            />

            <Card
              icon={<Users color="#422680" />}
              title={"Advanced Time Tracking"}
              text={""}
              isList={true}
              listTopic={[
                "Comprehensive intern profiles with skills and objectives",
                "Performance evaluation tools and feedback system",
                "Document management for contracts and certificates",
                "Milestone tracking and achievement recognition"
              ]}
              textlist={""}
            />

            <Card
              icon={<Shield color="#422680" />}
              title={"Security &amp; Compliance"}
              text={""}
              isList={true}
              listTopic={[
                "Role-based access control for data protection",
                "Compliance with labor regulations and standards",
                "Data encryption and secure authentication",
                "Regular backups and audit trails"
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
            Why Choose StagyTime
          </Typography>

          <Box className={"Grid"} sx={{ p: "1.5rem" }}>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <Building size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                For Organizations
              </Typography>

              <Typography className={"benefitText"}>
                Reduce administrative overhead, ensure compliance with labor
                laws, and gain valuable insights into intern productivity and
                performance.
              </Typography>

            </Box>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <GraduationCap size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                For Interns
              </Typography>

              <Typography className={"benefitText"}>
                Easily track work hours, showcase achievements, receive
                feedback, and build a comprehensive record of internship
                experience.
              </Typography>

            </Box>

            <Box sx={{ p: "1.5rem" }}>

              <Box className={"Icon"}>
                <Calendar size={25} color="white" />
              </Box>

              <Typography variant="h3" className={"benefitTitle"}>
                For Supervisors
              </Typography>

              <Typography className={"benefitText"}>
                Monitor intern progress, provide timely feedback, manage
                schedules efficiently, and generate comprehensive performance
                reports.
              </Typography>

            </Box>

          </Box>


        </motion.div>

      </Styled.Benefits>


      <Styled.Cases>

        <Box className={"caseContainer"}>

          <Typography variant="h2" className={"caseTitle"}>
            StagyTime in Action
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
                title={"Security &amp; Compliance"}
                text={""}
                isList={true}
                textlist={"Large corporations use StagyTime to manage seasonal internship programs with dozens of interns across multiple departments."}
                listTopic={[
                  "Centralized management of diverse intern roles",
                  "Departmental reporting and budget allocation",
                  "Integration with existing HR systems",
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
                title={"Educational Institutions"}
                text={""}
                isList={true}
                textlist={"Universities and colleges use StagyTime to monitor student internships and ensure they meet academic requirements."}
                listTopic={[
                  "Academic credit hour tracking",
                  "Learning objective alignment",
                  "Faculty supervisor dashboards",
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
                title={"Startups & Small Businesses"}
                text={""}
                isList={true}
                textlist={"Growing companies use StagyTime to efficiently manage interns and maximize their contribution to business growth."}
                listTopic={[
                  "Cost-effective talent management",
                  "Project-based hour allocation",
                  "Simplified onboarding process",
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
                title={"Non-Profit Organizations"}
                text={""}
                isList={true}
                textlist={"Non-profits use StagyTime to coordinate volunteer interns and ensure efficient use of limited resources."}
                listTopic={[
                  "Volunteer hour certification",
                  "Grant reporting and compliance",
                  "Impact measurement tools",
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
            Frequently Asked Questions
          </motion.h2>

          <Stack gap={1}>
            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"How does StagyTime handle remote interns?"}
                text={"StagyTime is designed for both on-site and remote interns. For remote workers, the platform offers IP-based location verification, screenshot capabilities (optional), and integration with virtual collaboration tools to ensure productivity tracking without compromising privacy."} children={""} />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Can StagyTime integrate with our existing HR software?"}
                text={"Yes, StagyTime offers API integration with popular HR and payroll systems. Our platform can sync data with your existing software to avoid duplicate entries and ensure consistent record-keeping across your"} children={""} />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"What makes StagyTime different from general time tracking tools?"}
                text={"Unlike general time tracking tools, StagyTime is specifically designed for intern management. It includes features tailored to educational requirements, skill development tracking, performance evaluation, and internship-specific reporting that general time tracking solutions don't offer."} children={""} />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"How secure is the data stored in StagyTime?"}
                text={"StagyTime employs industry-standard security measures including end-to-end encryption, secure authentication protocols, regular security audits, and compliance with data protection regulations. All data is stored in SOC 2 compliant cloud infrastructure with regular backups"} children={""} />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Can interns access their own data after the internship ends?"}
                text={"Yes, StagyTime offers an archive feature that allows organizations to provide interns with a permanent record of their internship, including hours worked, projects completed, skills acquired, and performance evaluations. This serves as valuable documentation for their professional portfolios."} children={""} />
            </motion.div>
          </Stack>

        </Box>
      </Styled.Questions>

      <Footer
        text={""}
        icon={undefined}
        description={"Join hundreds of organizations that have streamlined their intern programs with"}
        title={"Transform Your Intern Management Today"}
        text2={""}
        simple={false}
      />
    </Container>
  );
}
