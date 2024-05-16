import { HeaderViewModel } from "./view.model";

export function HeaderView() {
    const { logout } = HeaderViewModel();
    return (
        <div className="bg-white max-w-full flex justify-end min-h-[77px] items-center">
            <button onClick={() => logout()} className="text-white font-bold w-[272px] min-h-[44px] rounded-md bg-[#02274F] mr-5 m-1.5">Logout</button>
        </div>
    )
}