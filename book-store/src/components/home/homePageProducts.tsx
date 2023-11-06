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
  homePageProductsSection: "w-full mt-8 flex flex-col justify-center items-center",
};
