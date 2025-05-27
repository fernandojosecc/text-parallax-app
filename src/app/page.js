import TextParallax from "../components/TextParallax";

export default function Home() {
  return (
    <main>
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{ fontSize: "2rem", textAlign: "center" }}>
          Scroll down for the show 👀✨
        </h2>
      </section>

      <TextParallax />

      <section style={{ height: "100vh" }}></section>
    </main>
  );
}
