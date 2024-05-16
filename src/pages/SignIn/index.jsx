import { SignInView } from "./view";
import { SignInViewModel } from "./view.model";

export function SignIn() {
  return (
    <>
      <SignInView {...SignInViewModel} />
    </>
  );
}
