// Funzione che viene eseguita ogni volta che l'utente muove la rotellina (scroll)
window.onscroll = function() {
    gestisciInterazione();
};

function gestisciInterazione() {
    // 1. LOGICA PER LA BARRA DI PROGRESSO
    
    // Calcola quanto l'utente ha sceso nella pagina
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Calcola l'altezza totale del contenuto della pagina meno la parte che stiamo vedendo ora
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calcola la percentuale di lettura (da 0 a 100)
    const scrolled = (winScroll / height) * 100;
    
    // Applica questa percentuale alla larghezza della barra nel CSS
    const bar = document.getElementById("progress-bar");
    if (bar) {
        bar.style.width = scrolled + "%";
    }

    // 2. LOGICA PER IL TASTO "TORNA SU"
    
    const btn = document.getElementById("backToTop");
    if (btn) {
        // Se l'utente ha sceso più di 300 pixel, mostra il tasto, altrimenti nascondilo
        if (winScroll > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
}

// Funzione richiamata quando si clicca il tasto (onclick nell'HTML)
function topFunction() {
    // Riporta la pagina a coordinata 0 (in cima) con un movimento fluido
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
/* ==========================================
   3. DARK MODE (MODALITÀ CINEMA)
   ========================================== */
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Controlla se l'utente aveva già scelto il tema scuro precedentemente
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    if (darkModeToggle) darkModeToggle.textContent = '☀️'; // Mostra il sole
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        // Se è scuro, lo fa tornare chiaro
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = '🌙'; // Torna la luna
        } else {
            // Se è chiaro, lo fa diventare scuro
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = '☀️'; // Mostra il sole
        }
    });
}

/* ==========================================
   4. LIGHTBOX (ZOOM IMMAGINI)
   ========================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('img:not(#lightbox-img)'); 

images.forEach(img => {
    // NUOVO: Se l'immagine si trova dentro una "chapter-card", interrompi e non fare lo zoom!
    if (img.closest('.chapter-card')) return;

    img.addEventListener('click', () => {
        if(lightbox && lightboxImg) {
            lightboxImg.src = img.src; 
            lightbox.classList.add('lightbox-active'); 
        }
    });
});

if (lightbox) {
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('lightbox-active');
    });
}