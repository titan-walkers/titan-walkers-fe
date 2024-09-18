import Header from "@widgets/header/Header";
import Sidebar from "@widgets/sidebar/Sidebar";

import Provider from "./_provider/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Provider>
          <Header />
          <Sidebar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
