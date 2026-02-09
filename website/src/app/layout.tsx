import ClientRootLayout from "./layoutClient";

export default async function RootLayout({children}: LayoutProps<"/">) {
  return(
    <ClientRootLayout>
      {children}
    </ClientRootLayout>
  );
}
