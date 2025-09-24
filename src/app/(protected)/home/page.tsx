import { Page } from '@/components/PageLayout';
import { UserInfo } from '@/components/UserInfo';

export default async function Home() {
  return (
    <>
      <Page.Main className="flex flex-col items-center justify-start gap-4 mb-16">
        <UserInfo />
        <p>Bienvenido a la página principal protegida. PIMBA!</p>
      </Page.Main>
    </>
  );
}
