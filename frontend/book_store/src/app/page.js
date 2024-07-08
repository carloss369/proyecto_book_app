'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import TopMenu from "./components/pages/topMenu"
import Options from './components/pages/options';
import MainPanel from './components/pages/mainPanel';
import Features from './components/pages/features';
import BestSeller from './components/pages/bestSeller';
import LastIncome from './components/pages/lastIncome';
import Footer from './components/pages/footer';
import Info from './components/pages/info';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <TopMenu></TopMenu>
      <Options></Options>
      <MainPanel></MainPanel>
      <Features></Features>
      <div className={styles.bestseller}><BestSeller></BestSeller></div>
      
      <div className={styles.income}><LastIncome></LastIncome></div>
      <Footer></Footer>
      <Info></Info>
    </main>
  );
}
