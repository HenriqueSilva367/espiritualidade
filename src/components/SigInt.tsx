import { User } from "lucide-react";

export function SignIn(){
    return (
        <a
        href={``}
        className="flex items-center gap-3 text-left transition-colors"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <User className="h-5 w-5 text-purple-400 "/>
        </div>
        <p className="max-w-[140px] text-sm leading-snug">
          <span className="underline">Crie sua conta</span> e salve suas
          leituras!
        </p>
      </a>

    )
}