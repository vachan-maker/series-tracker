import Title from "./components/Title"
import Search from "./components/Search"
export default function Home() {
  return (
    <>
    <div className="w-full h-full flex flex-col items-center pt-64 gap-14">
    <Title/>
    <Search/>
    </div>
    </>
  )
}