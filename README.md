# 🎬 Film Art: An Introduction - Digital Study Guide

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completato-success?style=for-the-badge)

Questo progetto è la trasposizione digitale e interattiva del celebre manuale **"Film Art: An Introduction"** scritto da *David Bordwell* e *Kristin Thompson*. 

Nato originariamente come progetto scolastico, il sito si è evoluto in un vero e proprio **archivio accademico personale** e in uno strumento divulgativo per rendere accessibile a tutti lo studio del linguaggio cinematografico.

## 🎯 Obiettivi del Progetto
1. **Studio Attivo:** Fornire una sintesi organizzata e facilmente consultabile dei concetti chiave del manuale (Forma, Stile, Messa in scena, Montaggio, ecc.).
2. **Accessibilità:** Rendere i concetti di Bordwell & Thompson disponibili in lingua italiana con un linguaggio chiaro, supportato da fotogrammi esplicativi.
3. **Sviluppo Web:** Dimostrare la padronanza delle tecnologie web di base (HTML Semantico, CSS3 e JavaScript) applicate a un'interfaccia utente (UI) pulita e moderna.

## ✨ Funzionalità e Design
* **Design "Cinematografico":** L'interfaccia (UI) è stata curata per richiamare l'estetica del cinema, con un forte contrasto tra l'header scuro e gli accenti "rosso cinema".
* **Tipografia Elegante:** Utilizzo combinato di font *Serif* per i titoli (a richiamare l'autorevolezza accademica e la carta stampata) e *Sans-Serif* per i testi lunghi per garantire la massima leggibilità a schermo.
* **Responsive Design:** Il sito è completamente fruibile da smartphone, tablet e desktop grazie all'uso mirato di CSS Flexbox e Media Queries.
* **Architettura Modulare:** Il codice è estremamente pulito. Lo stile di tutte le pagine è centralizzato in un unico file `style.css`, mentre le funzioni interattive sono gestite da uno script dedicato, garantendo una manutenzione rapida e senza errori.

## 🗂 Struttura delle Cartelle
Il progetto segue una struttura classica e ordinata:

```text
film-art-project/
│
├── index.html              # Home page con l'indice dei capitoli
├── README.md               # Documentazione del progetto
│
├── css/
│   └── style.css           # Foglio di stile globale (UI, Layout, Responsive)
│
├── js/
│   └── script.js           # Funzionalità interattive (Barra progresso, Torna su)
│
├── pagine/
│   ├── info-libro.html     # Introduzione al manuale
│   ├── scopo-sito.html     # Obiettivi del progetto
│   ├── autori.html         # Biografia di Bordwell & Thompson
│   ├── capitolo1.html      # Arte, Tecnologia e Produzione
│   ├── capitolo2.html      # Il significato della forma
│   └── capitolo[...].html  # Capitoli dal 3 al 12
│
└── assets/
    └── images/             # Tutte le immagini compresse e ottimizzate (inclusa la favicon)
