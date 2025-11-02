import Header from './components/Header';
import IdeaForm from './components/IdeaForm';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0">
        <Spline
          scene="https://prod.spline.design/8zq7v2V4vZ2e5Vd6/scene.splinecode"
          aria-label="3D background"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays that don't block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <main>
          <IdeaForm />
          <FeatureGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
