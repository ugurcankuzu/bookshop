export default function HomePageProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={homePageProductsStyle.homePageProductsSection}>
      {children}
    </section>
  );
}

const homePageProductsStyle = {
  homePageProductsSection: "w-full bg-smoke border border-black",
};
