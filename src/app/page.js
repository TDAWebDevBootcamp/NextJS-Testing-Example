import Calculator from '../components/Calculator';
import Cipher from '../components/Cipher';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Calculator & Cipher Tools
      </h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <Calculator />
        <Cipher />
      </div>
    </main>
  );
}
