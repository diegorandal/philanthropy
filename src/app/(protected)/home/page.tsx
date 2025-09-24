import { Page } from '@/components/PageLayout';
import { UserInfo } from '@/components/UserInfo';
import { Navigation } from '@/components/Navigation';

export default async function Home() {
  return (
    <>
      <Page.Main className="flex flex-col items-center justify-start gap-4 mb-16">
        <UserInfo />
        <p>Bienvenido</p>
      </Page.Main>
      <Page.Footer className="px-0 fixed bottom-0 w-full bg-white flex items-center justify-center">
        <Navigation />
      </Page.Footer>
    </>
  );
}
