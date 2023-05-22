import "../style/style.scss"

export const metadata = {
  title: 'Welcome to Blogreat',
  description: 'Blogreat description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  )
}
