import Header from './components/Header';
import IdeaForm from './components/IdeaForm';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.06),transparent_60%)]">
      <Header />
      <main>
        <IdeaForm />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
