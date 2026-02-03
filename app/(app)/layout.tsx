import AppHeader from '../../components/AppHeader';
import Sidebar from '../../components/Sidebar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#030303] min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 ml-64 p-8 min-h-screen relative">
        <AppHeader />
        {children}

        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      </main>
    </div>
  );
}
