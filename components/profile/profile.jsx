import Image from "next/image";
import avatarSrc from "../game/images/avatar-1.jpg";
import clsx from "clsx";


export function Profile({ className, name, rating, avatar = avatarSrc}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className
      )}
    >
      <Image className="rounded-3xl w-12"
             src={avatar}
             alt="avatar"
             unoptimized
      />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: {rating}</div>
      </div>
    </div>
  );
}
