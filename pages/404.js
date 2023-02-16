import Link from '@/src/components/Link';

export default function Page404() {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link href='/' passHref>
        Ir para a Home
      </Link>
    </div>
  );
}
