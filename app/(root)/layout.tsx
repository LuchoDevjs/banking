export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
}
