import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <img src="/assets/logo.png" alt="RIAT Logo" className="h-12 w-auto" />
        <h1 className="font-bold text-xl">Royal International Air Tattoo</h1>
      </div>
      <div className="space-x-6 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/public-affairs">Public Affairs</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section
      className="relative text-center min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/reference-bg.jpg)' }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          RIAT26 On Sale Now!
        </motion.h1>
        <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 rounded-2xl shadow-lg">
          Tickets & Packages
        </Button>
        <div className="mt-12 bg-white/80 backdrop-blur-md inline-block px-10 py-4 rounded-2xl shadow-lg">
          <p className="text-gray-800 font-semibold">Airshow begins in:</p>
          <h2 className="text-2xl font-bold">269 Days : 12 Hours : 21 Minutes : 27 Seconds</h2>
          <div className="flex justify-center mt-3 space-x-6">
            <img src="/assets/breitling.png" alt="Breitling" className="h-10" />
            <img src="/assets/baesystems.png" alt="BAE Systems" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Teams() {
  const teams = [
    { name: 'Red Arrows', description: 'World-famous RAF aerobatic team.', image: '/assets/team1.jpg' },
    { name: 'Patrouille Suisse', description: 'Precision Swiss Air Force team.', image: '/assets/team2.jpg' },
    { name: 'Frecce Tricolori', description: 'Italian Air Force demonstration team.', image: '/assets/team3.jpg' },
  ];
  return (
    <section className="p-10 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10">Display Teams</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teams.map((t) => (
          <Card key={t.name} className="shadow-lg rounded-2xl overflow-hidden">
            <img src={t.image} alt={t.name} className="h-56 w-full object-cover" />
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">{t.name}</h3>
              <p>{t.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="p-10 text-center bg-white min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Gallery</h2>
      <p className="mb-8 text-gray-600">Explore highlights from past RIAT events. Replace these images in the /assets folder.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.img
            key={i}
            whileHover={{ scale: 1.05 }}
            src={`/assets/gallery${i}.jpg`}
            alt={`Gallery ${i}`}
            className="rounded-xl shadow-lg object-cover h-64 w-full"
          />
        ))}
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section className="p-10 text-center bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Tickets & Packages</h2>
      <p className="mb-6 max-w-2xl mx-auto text-gray-700">
        Choose from General Admission, Grandstand, or Hospitality packages to enjoy the Royal International Air Tattoo in your preferred style.
      </p>
      <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md">
        Buy Tickets
      </Button>
    </section>
  );
}

function PublicAffairs() {
  return (
    <section className="p-10 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-6">Public Affairs</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        The Royal International Air Tattoo is dedicated to promoting aviation excellence and inspiring future generations through education, innovation, and public engagement.
        This section can be expanded to include media releases, contact details, and press resources.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/public-affairs" element={<PublicAffairs />} />
      </Routes>
    </Router>
  );
}
