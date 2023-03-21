import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {

    const [user, loading] = useAuthState(auth);
    return(
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="mobile-tit text-7xl font-pop font-bold tracking-wide">Body Mind Fitness </button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link legacyBehavior href={"/auth/login"}>
            <a className="mobile py-3 px-5 text-2xl text-medium bg-orange-500 text-white rounded-3xl font-popin ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="mobile font-popin bg-orange-500 text-white py-3 px-5 rounded-3xl textx-lg">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
            <img
                className="pic w-16 rounded-3xl cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
);
}