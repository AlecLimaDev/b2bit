import { HeaderView } from "./view";
import { HeaderViewModel } from "./view.model";

export default function Header() {
  return (
    <>
      <HeaderView {...HeaderViewModel} />
    </>
  );
}
