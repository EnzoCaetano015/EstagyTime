import {
  Clock,
  BarChart3,
  Users,
  CheckCircle,
  Building,
  GraduationCap,
  Calendar,
  Shield,
  ChevronDown,
} from "lucide-react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

import styles from "./LearnMore.module.css";
import FooterLP from "../../components/FooterLP/FooterLP_Comp";
import Header from "../../components/Header/Header_Comp";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../Hook/Motion/Motion";


export default function LearnMore() {
  return (
    <div className={styles.learnMore}>

      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContainer}
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
        >
          <h1 className={styles.heroTitle}>Discover StagyTime</h1>
          <p className={styles.heroSubtitle}>
            A comprehensive platform designed specifically for managing intern work hours, productivity, and performance in organizations of all sizes.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
            className={styles.heroDivider}

          />
        </motion.div>
      </section>

      {/* Detailed Features */}
      <section className={styles.featuresSection}>
        <motion.div
          className={styles.featuresContainer}
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
        >
          <h2 className={styles.featuresTitle}>Comprehensive Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Clock className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>
                Advanced Time Tracking
              </h3>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Simple clock-in/out system with mobile and desktop access
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Geolocation verification to ensure accurate on-site tracking
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Break time management and overtime calculation</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Project and task assignment for detailed hour allocation
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <BarChart3 className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>Insightful Reporting</h3>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Customizable dashboards for supervisors and administrators
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Export reports in multiple formats (PDF, CSV, Excel)
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Productivity analytics and performance metrics
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Automated weekly and monthly summary reports
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Users className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>
                Complete Intern Management
              </h3>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Comprehensive intern profiles with skills and objectives
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Performance evaluation tools and feedback system
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Document management for contracts and certificates
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Milestone tracking and achievement recognition
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Shield className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>
                Security &amp; Compliance
              </h3>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Role-based access control for data protection</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Compliance with labor regulations and standards
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Data encryption and secure authentication</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Regular backups and audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
          className={styles.benefitsContainer}
        >
          <h2 className={styles.benefitsTitle}>Why Choose StagyTime</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <Building className={styles.benefitIcon} />
              </div>
              <h3 className={styles.benefitTitle}>For Organizations</h3>
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
              <h3 className={styles.benefitTitle}>For Interns</h3>
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
              <h3 className={styles.benefitTitle}>For Supervisors</h3>
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
          <h2 className={styles.useCasesTitle}>StagyTime in Action</h2>
          <div className={styles.useCasesGrid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={styles.useCaseCard}
            >
              <h3 className={styles.useCaseTitle}>
                Corporate Internship Programs
              </h3>
              <p className={styles.useCaseText}>
                Large corporations use StagyTime to manage seasonal internship
                programs with dozens of interns across multiple departments.
              </p>
              <ul className={styles.useCaseList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Centralized management of diverse intern roles
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>
                    Departmental reporting and budget allocation
                  </span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Integration with existing HR systems</span>
                </li>
              </ul>
            </motion.div >

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className={styles.useCaseCard}
            >
              <h3 className={styles.useCaseTitle}>
                Educational Institutions
              </h3>
              <p className={styles.useCaseText}>
                Universities and colleges use StagyTime to monitor student
                internships and ensure they meet academic requirements.
              </p>
              <ul className={styles.useCaseList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Academic credit hour tracking</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Learning objective alignment</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Faculty supervisor dashboards</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className={styles.useCaseCard}
            >
              <h3 className={styles.useCaseTitle}>
                Startups & Small Businesses
              </h3>
              <p className={styles.useCaseText}>
                Growing companies use StagyTime to efficiently manage interns and
                maximize their contribution to business growth.
              </p>
              <ul className={styles.useCaseList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Cost-effective talent management</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Project-based hour allocation</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Simplified onboarding process</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className={styles.useCaseCard}
            >
              <h3 className={styles.useCaseTitle}>
                Non-Profit Organizations
              </h3>
              <p className={styles.useCaseText}>
                Non-profits use StagyTime to coordinate volunteer interns and
                ensure efficient use of limited resources.
              </p>
              <ul className={styles.useCaseList}>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Volunteer hour certification</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Grant reporting and compliance</span>
                </li>
                <li>
                  <CheckCircle className={styles.featureListIcon} />
                  <span>Impact measurement tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUpVariant}
            className={styles.faqTitle}
          >
            Frequently Asked Questions
          </motion.h2>


          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ChevronDown size={15} color="black" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">How does StagyTime handle remote interns?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  StagyTime is designed for both on-site and remote interns. For remote workers, the platform offers
                  IP-based location verification, screenshot capabilities (optional), and integration with virtual
                  collaboration tools to ensure productivity tracking without compromising privacy.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ChevronDown size={15} color="black" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Can StagyTime integrate with our existing HR software?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, StagyTime offers API integration with popular HR and payroll systems. Our platform can sync data
                  with your existing software to avoid duplicate entries and ensure consistent record-keeping across your
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ChevronDown size={15} color="black" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">What makes StagyTime different from general time tracking tools?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Unlike general time tracking tools, StagyTime is specifically designed for intern management. It
                  includes features tailored to educational requirements, skill development tracking, performance
                  evaluation, and internship-specific reporting that general time tracking solutions don't offer.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ChevronDown size={15} color="black" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">How secure is the data stored in StagyTime?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  StagyTime employs industry-standard security measures including end-to-end encryption, secure
                  authentication protocols, regular security audits, and compliance with data protection regulations. All
                  data is stored in SOC 2 compliant cloud infrastructure with regular backups
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInVariant}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ChevronDown size={15} color="black" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Can interns access their own data after the internship ends?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, StagyTime offers an archive feature that allows organizations to provide interns with a permanent
                  record of their internship, including hours worked, projects completed, skills acquired, and performance
                  evaluations. This serves as valuable documentation for their professional portfolios.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <FooterLP
        text={""}
        icon={undefined}
        description={"Join hundreds of organizations that have streamlined their intern programs with"}
        title={"Transform Your Intern Management Today"}
        text2={""} />
    </div>
  );
}
