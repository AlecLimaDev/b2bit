import Header from "../../components/Header";
import HomeViewModel from "./view.model";

export function HomeView() {
 
  const { filterData: data } = HomeViewModel()

  return (
    <>
      <Header />
      <div className="bg-slate-200 flex justify-center h-[100vh] items-center">
        <form
          action=""
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-slate-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        >
          <div className="flex justify-center flex-col items-center">
            <p>Profile picture</p>
            <img
              src={data.avatar && data.avatar.medium}
              alt="Foto de perfil"
              className="w-20 rounded-md h-20 bg-slate-500 object-cover"
            />
          </div>

          <div className="flex flex-col my-5 gap-2.5">
            <label htmlFor="" className="">
              Your <strong>Name</strong>
            </label>
            <input
              type="email"
              className="w-full h-12 rounded-md p-4 bg-[#F1F1F1]"
              placeholder="Christine James"
              value={data.name}
              readOnly
            />
          </div>

          <div className="flex flex-col my-5 gap-2.5">
            <label htmlFor="" className="">
              Your <strong>E-mail</strong>
            </label>
            <input
              type="email"
              className="w-full h-12 rounded-md p-4 bg-[#F1F1F1]"
              placeholder="christinejames@gmail.com"
              value={data.email}
              readOnly
            />
          </div>
        </form>
      </div>
    </>
  );
}
