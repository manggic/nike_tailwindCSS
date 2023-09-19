import {
  Footer,
  SpecialOffer,
  Hero,
  SuperQuality,
  PopularProducts,
  Subscribe,
  Services,
  CustomerReviews,
  Nav
} from "./components";

export default function App() {
  var onresize = function() {
    document.getElementById('show-size').innerHTML = document.body.clientWidth + 'px';
 }
 window.addEventListener("resize", onresize);
  return (
    <main className="relative">
      <div id='show-size' style={{zIndex:20}} className="font-bold fixed self-end bottom-3 right-2 pt-2"></div>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
