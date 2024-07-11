'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import TopMenu from "./components/pages/topMenu"
import Options from './components/pages/options';
import MainPanel from './components/pages/homepage/mainPanel';
import Features from './components/pages/homepage/features';
import BestSeller from './components/pages/homepage/bestSeller';
import LastIncome from './components/pages/homepage/lastIncome';
import Footer from './components/pages/homepage/footer';
import Info from './components/pages/homepage/info';
import Login from './components/pages/authentication/login';

import Register from './components/pages/authentication/register';




export default function Home() {
 
  return (
    <main className={styles.main}>
      {/*
        <TopMenu></TopMenu>
      <Options></Options>
      <MainPanel></MainPanel>
      <Features></Features>
      <div className={styles.bestseller}><BestSeller></BestSeller></div>
      
      <div className={styles.income}><LastIncome></LastIncome></div>
      <Footer></Footer>
      <Info></Info>
      */}
      <TopMenu></TopMenu>
      <Options></Options>
      <Register></Register>
      <Info></Info>
    </main>
  );
}
