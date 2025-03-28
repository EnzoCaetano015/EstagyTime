import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

export default Container;
