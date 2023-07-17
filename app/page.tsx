import Container from "./components/Container";
import WeatherCard from "./components/cards/weatherCard";

export default function Home() {
  return (
    <main>
      <Container>
        <WeatherCard/>
      </Container>
    </main>
  )
}
