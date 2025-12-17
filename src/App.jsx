import Header from '@/components//Header';
import Footer from '@/components/Footer';
import Form from '@/components/Form/Form';

export default function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
