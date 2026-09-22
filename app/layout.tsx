import './globals.css';

export const metadata = {
  title: 'Digital Heroes - Golf & Charity',
  description: 'Rolling 5 golf score system and prize draws',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}