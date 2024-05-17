import Image from "next/image";
import avatarSrc from "./avatar.jpg";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div
      className={clsx("flex items-center gap-2 text-start text-teal-600", className)}  >
      <Image className="rounded-3xl"
             src={avatarSrc}
             alt="avatar"
             unoptimized
      />
      <div>
        <div className="text-lg leading-tight">RUINER333</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1337</div>
      </div>
    </div>
  );
}
