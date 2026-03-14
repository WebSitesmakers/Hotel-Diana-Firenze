import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  History, 
  Crown, 
  Map, 
  Clock, 
  Phone, 
  Mail, 
  Coffee, 
  Wifi, 
  Car, 
  Briefcase 
} from 'lucide-react';
import heroImage from './assets/hero.png';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const valueRef = useRef(null);
  const philosophyRef = useRef(null);
  const methodRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Navbar scroll effect
      const navbar = document.querySelector('nav');
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          if (self.direction === 1) navbar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-md');
          else if (self.scroll() < 50) navbar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-md');
        }
      });

      // Hero animations
      gsap.from(heroRef.current.querySelector('h1'), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5
      });
      gsap.from(heroRef.current.querySelector('p'), {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.8
      });
      gsap.from(heroRef.current.querySelector('.cta'), {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 1.1
      });

      // Sezione Valore - staggered fade in
      gsap.from(valueRef.current.children, {
        scrollTrigger: {
          trigger: valueRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Filosofia - letter by letter reveal
      const words = philosophyRef.current.querySelectorAll('.reveal-word');
      gsap.from(words, {
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: 'top 70%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out'
      });

      // Metodo - Scroll stacking animation
      const cards = methodRef.current.querySelectorAll('.method-card');
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => card.classList.add('active'),
          onLeave: () => card.classList.add('inactive'),
          onEnterBack: () => card.classList.remove('inactive'),
          onLeaveBack: () => card.classList.remove('active')
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative">
      <div className="noise-overlay"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 px-10 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold tracking-tight text-diana-blue">
          Diana Park <span className="text-diana-gold italic font-normal">Hotel</span>
        </div>
        <div className="hidden md:flex space-x-12 items-center text-sm uppercase tracking-widest font-sans font-semibold">
          <a href="#valore" className="link-premium cursor-pointer">Posizione</a>
          <a href="#filosofia" className="link-premium cursor-pointer">Stile</a>
          <a href="#metodo" className="link-premium cursor-pointer">Servizi</a>
          <button className="btn-premium">Prenota ora</button>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Diana Park Hotel Facade" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-serif mb-6 drop-shadow-lg">
            Diana Park Hotel
          </h1>
          <p className="text-xl md:text-3xl font-serif italic mb-10 max-w-3xl mx-auto drop-shadow-md">
            L'eleganza intramontabile <span className="text-diana-gold font-bold">nel cuore di Firenze.</span>
          </p>
          <div className="cta">
            <button className="btn-premium px-12 py-5 text-lg">Prenota una camera</button>
          </div>
        </div>
      </section>

      {/* SEZIONE VALORE */}
      <section id="valore" className="py-24 px-10 bg-white">
        <div ref={valueRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-diana-gray/30 rounded-2xl flex items-center justify-center">
              <MapPin className="text-diana-gold w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Posizione Strategica</h3>
            <p className="text-gray-600 leading-relaxed">
              Area tranquilla alle porte della ZTL. A soli 10 minuti dal centro storico, perfettamente collegato per vivere Firenze senza pensieri.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-16 h-16 bg-diana-gray/30 rounded-2xl flex items-center justify-center">
              <History className="text-diana-gold w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Fascino Storico</h3>
            <p className="text-gray-600 leading-relaxed">
              Palazzo neoclassico di fine '800. Interni curati con dettagli d'epoca, moquette intarsiate e un'atmosfera di rara autorevolezza.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-16 h-16 bg-diana-gray/30 rounded-2xl flex items-center justify-center">
              <Crown className="text-diana-gold w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Servizi Premium</h3>
            <p className="text-gray-600 leading-relaxed">
              Staff multilingue h24, parcheggio privato interno e sala meeting. Ogni dettaglio è pensato per un soggiorno di assoluto comfort.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="py-32 bg-diana-blue text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-10 text-center">
          <div ref={philosophyRef} className="space-y-12">
            <p className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase opacity-60">
              La nostra Essenza
            </p>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              { "La maggior parte degli hotel punta sulla standardizzazione.".split(' ').map((word, i) => (
                <span key={i} className="reveal-word inline-block mr-3">{word}</span>
              )) }
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif italic">
              { "Noi puntiamo su qualità, relazione e continuità.".split(' ').map((word, i) => (
                <span key={i} className={`reveal-word inline-block mr-3 ${['qualità,', 'relazione', 'continuità.'].includes(word) ? 'text-diana-gold font-bold not-italic' : ''}`}>{word}</span>
              )) }
            </h2>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="py-24 px-10 bg-diana-gray/20">
        <div className="max-w-4xl mx-auto relative space-y-24" ref={methodRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Il Nostro Processo</h2>
            <p className="text-gray-500 font-sans tracking-widest uppercase text-sm">Cura in ogni dettaglio</p>
          </div>

          <div className="method-card space-y-6 active">
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-serif text-diana-gold opacity-30">01</span>
              <h3 className="text-3xl font-serif">Ascolto</h3>
            </div>
            <p className="text-lg text-gray-600">
              Il nostro staff è dedicato a comprendere ogni vostra esigenza prima ancora del vostro arrivo, garantendo un'accoglienza su misura.
            </p>
          </div>

          <div className="method-card space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-serif text-diana-gold opacity-30">02</span>
              <h3 className="text-3xl font-serif">Progettazione</h3>
            </div>
            <p className="text-lg text-gray-600">
              Dalla scelta della camera alle prenotazioni esterne, ogni aspetto del vostro soggiorno è coordinato con professionalità neoclassica.
            </p>
          </div>

          <div className="method-card space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-serif text-diana-gold opacity-30">03</span>
              <h3 className="text-3xl font-serif">Cura Continua</h3>
            </div>
            <p className="text-lg text-gray-600">
              Il comfort non si ferma mai. Assistenza h24 e una prima colazione curata per iniziare ogni giornata fiorentina nel migliore dei modi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-32 bg-white text-center px-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif">Vivi l'esperienza.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto italic font-serif">
            Unitevi a noi in un viaggio nel tempo, dove l'ospitalità ottocentesca incontra il lusso contemporaneo.
          </p>
          <button className="btn-premium px-16 py-6 text-xl">Prenota una camera</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-diana-blue text-white py-20 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="font-serif text-3xl font-bold">Diana Park Hotel</div>
            <p className="opacity-60 text-sm leading-relaxed">
              Fascino storico e comfort moderno in un palazzo neoclassico nel cuore di Firenze.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="opacity-80">Presenza digitale attiva</span>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            <h4 className="font-serif text-lg text-diana-gold">Orari</h4>
            <div className="space-y-2 opacity-60">
              <p className="flex justify-between"><span>Reception:</span> <span>H24</span></p>
              <p className="flex justify-between"><span>Check-in:</span> <span>dalle 14:00</span></p>
              <p className="flex justify-between"><span>Colazione:</span> <span>07:30 - 10:30</span></p>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            <h4 className="font-serif text-lg text-diana-gold">Contatti</h4>
            <div className="space-y-4 opacity-60">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-diana-gold" />
                <span>Via Pasquale Villari, 7, 50144 Firenze FI</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-diana-gold" />
                <span>+39 055 475704</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-diana-gold" />
                <span>info@dianaparkhotel.it</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg text-diana-gold">Servizi</h4>
            <div className="grid grid-cols-2 gap-4 text-xs opacity-60">
              <div className="flex items-center space-x-2"><Wifi size={14} /> <span>Wi-Fi Libero</span></div>
              <div className="flex items-center space-x-2"><Car size={14} /> <span>Parcheggio</span></div>
              <div className="flex items-center space-x-2"><Coffee size={14} /> <span>Breakfast</span></div>
              <div className="flex items-center space-x-2"><Briefcase size={14} /> <span>Business</span></div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-30">
          <p>© 2024 Diana Park Hotel. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
