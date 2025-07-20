import ToprakCV from "./components/PersonCV";
import { toprakCV } from "./data/cvData";

export default function App() {
  return (
    <>
     <title>{toprakCV.name}</title>
     <ToprakCV />
    </>
  )
}