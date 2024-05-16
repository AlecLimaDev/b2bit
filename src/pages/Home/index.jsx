import { HomeView } from "./view";
import HomeViewModel from "./view.model";

export function Home() {
  return (
    <>
      <HomeView {...HomeViewModel} />
    </>
  );
}
