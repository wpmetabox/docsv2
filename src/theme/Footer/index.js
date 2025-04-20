import React from 'react';
import Footer from '../../components/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterWrapper() {
  const {siteConfig} = useDocusaurusContext();
  return <Footer />;
}

