import { Container, Image } from "react-bootstrap";
 
export default function About() {
  return (
    <>
      
      <Container className="py-5">
      <h2 style={{textAlign: "center", padding: "1.5em"}}>About</h2>
      <h3>
        Welcome to our site! We’re passionate about delivering quality content
        and innovative ideas to our community. Our mission is to empower and
        inspire through creativity and collaboration.
      </h3>

      <div className="text-center my-4">
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          alt="About visual"
          fluid
          rounded
          style={{ maxHeight: "300px" }}
        />
      </div>

      <h3>
        With a focus on excellence, we continue to grow and learn from every
        experience. Thank you for being a part of our journey — we’re excited
        about what the future holds and hope you’ll continue with us.
      </h3>
    </Container>
    </>
  );
}
