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

import styles from "./LearnMore.module.css";
import Header from "../../components/Header";
import Acordion from "../../components/Acordion";
import { Stack } from "@mui/material";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Container from "../../components/Container";


export default function LearnMore() {
  return (

    <Container>

      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>

        <motion.div
          className={styles.heroContainer}
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          viewport={{ once: true }}
        >
          <h1 className={styles.heroTitle}>
            Discover StagyTime
          </h1>

          <p className={styles.heroSubtitle}>
            A comprehensive platform designed specifically for managing intern work hours, productivity, and performance in organizations of all sizes.
          </p>

          <motion.div
            initial={slideInVariant.hidden}
            whileInView={slideInVariant.visible}
            className={styles.heroDivider}
            viewport={{ once: true }}
          />
        </motion.div>

      </section>

      {/* Detailed Features */}
      <section className={styles.featuresSection}>
        <motion.div
          className={styles.featuresContainer}
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          viewport={{ once: true }}
        >
          <h2 className={styles.featuresTitle}>
            Comprehensive Features
          </h2>

          <div className={styles.featuresGrid}>

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

          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <motion.div
          initial={fadeUpVariant.hidden}
          whileInView={fadeUpVariant.visible}
          className={styles.benefitsContainer}
          viewport={{ once: true }}
        >
          <h2 className={styles.benefitsTitle}>
            Why Choose StagyTime
          </h2>

          <div className={styles.benefitsGrid}>

            <div className={styles.benefitCard}>

              <div className={styles.benefitIconContainer}>
                <Building className={styles.benefitIcon} />
              </div>

              <h3 className={styles.benefitTitle}>
                For Organizations
              </h3>

              <p className={styles.benefitText}>
                Reduce administrative overhead, ensure compliance with labor
                laws, and gain valuable insights into intern productivity and
                performance.
              </p>

            </div>

            <div className={styles.benefitCard}>

              <div className={styles.benefitIconContainer}>
                <GraduationCap className={styles.benefitIcon} />
              </div>

              <h3 className={styles.benefitTitle}>
                For Interns
              </h3>

              <p className={styles.benefitText}>
                Easily track work hours, showcase achievements, receive
                feedback, and build a comprehensive record of internship
                experience.
              </p>

            </div>

            <div className={styles.benefitCard}>

              <div className={styles.benefitIconContainer}>
                <Calendar className={styles.benefitIcon} />
              </div>

              <h3 className={styles.benefitTitle}>
                For Supervisors
              </h3>

              <p className={styles.benefitText}>
                Monitor intern progress, provide timely feedback, manage
                schedules efficiently, and generate comprehensive performance
                reports.
              </p>

            </div>

          </div>


        </motion.div>

      </section>


      {/* Use Cases */}
      <section className={styles.useCasesSection}>

        <div className={styles.useCasesContainer}>

          <h2 className={styles.useCasesTitle}>
            StagyTime in Action
          </h2>

          <div className={styles.useCasesGrid}>

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

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <motion.h2
            initial={fadeUpVariant.hidden}
            whileInView={fadeUpVariant.visible}
            className={styles.faqTitle}
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
                text={"StagyTime is designed for both on-site and remote interns. For remote workers, the platform offers IP-based location verification, screenshot capabilities (optional), and integration with virtual collaboration tools to ensure productivity tracking without compromising privacy."}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Can StagyTime integrate with our existing HR software?"}
                text={"Yes, StagyTime offers API integration with popular HR and payroll systems. Our platform can sync data with your existing software to avoid duplicate entries and ensure consistent record-keeping across your"}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"What makes StagyTime different from general time tracking tools?"}
                text={"Unlike general time tracking tools, StagyTime is specifically designed for intern management. It includes features tailored to educational requirements, skill development tracking, performance evaluation, and internship-specific reporting that general time tracking solutions don't offer."}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"How secure is the data stored in StagyTime?"}
                text={"StagyTime employs industry-standard security measures including end-to-end encryption, secure authentication protocols, regular security audits, and compliance with data protection regulations. All data is stored in SOC 2 compliant cloud infrastructure with regular backups"}
              />
            </motion.div>

            <motion.div
              initial={slideInVariant.hidden}
              whileInView={slideInVariant.visible}
              viewport={{ once: true }}
            >
              <Acordion
                icon={<ChevronDown size={15} color="black" />}
                title={"Can interns access their own data after the internship ends?"}
                text={"Yes, StagyTime offers an archive feature that allows organizations to provide interns with a permanent record of their internship, including hours worked, projects completed, skills acquired, and performance evaluations. This serves as valuable documentation for their professional portfolios."}
              />
            </motion.div>
          </Stack>

        </div>
      </section>

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
