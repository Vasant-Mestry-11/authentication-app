import AuthForm from '@/components/auth-form';

export default async function Home({
  searchParams
}) {
  const { mode } = await searchParams
  return <AuthForm mode={mode} />;
}
