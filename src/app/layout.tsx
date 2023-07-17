export const metadata = {
  title: "William De Azevedo, Developpeur Front End",
  description: "Jeune étudiant de développement front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
