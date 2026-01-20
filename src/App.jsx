import Footer from '@/components/Footer';
import Form from '@/components/Form/Form';
import Header from '@/components/Header';

export default function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
