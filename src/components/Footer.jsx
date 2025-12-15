export default function Footer() {
  return (
    <footer className='mt-auto bg-sky-100 p-3 text-center text-xs'>
      <p>
        &copy; {new Date().getFullYear()} Copyright by{' '}
        <a
          className='font-bold hover:underline hover:underline-offset-1'
          href='https://github.com/Carlosaac23'
          target='_blank'
        >
          Carlos Acosta
        </a>
      </p>
    </footer>
  );
}
