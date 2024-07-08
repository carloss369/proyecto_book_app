'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import TopMenu from "./components/pages/topMenu"
import Options from './components/pages/options';
import MainPanel from './components/pages/mainPanel';
import Features from './components/pages/features';
export default function Home() {
  
  return (
    <main className={styles.main}>
      <TopMenu></TopMenu>
      <Options></Options>
      <MainPanel></MainPanel>
      <Features></Features>
    </main>
  );
}
