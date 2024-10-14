export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="bg-slate-400"> inner nev item</h1>
      {children}
    </>
  );
}
