import Header from "@widgets/header/Header";

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO : Sidebar 까지 완료된 이후에 모든 페이지 Template 적용 */}
      <Header />
      {children}
    </>
  );
}
