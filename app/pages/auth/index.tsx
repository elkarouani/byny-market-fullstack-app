import { SignInForm, SignUpForm, SocialAuthActions } from "sections";

export default function SignIn() {
  const authRole = "sign_in"; // "sign_in" | "sign_up"

  return (
    <div>
      <div className="px-12 py-14">
        {authRole === "sign_in" && <SignInForm />}
        {/* {authRole === "sign_up" && <SignUpForm />} */}
        <div className="mt-12 py-5 flex justify-center">
          <button className="AuthCallToAction">
            {authRole === "sign_in" && 'Sign In'}
            {/* {authRole === "sign_up" && 'Sign Up'} */}
          </button>
        </div>
        <SocialAuthActions />
      </div>
    </div>
  )
}
