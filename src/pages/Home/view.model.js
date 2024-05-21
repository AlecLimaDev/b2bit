import { useEffect, useState } from "react";
import { profileService } from "../../services/profile";

export default function HomeViewModel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      const responseApi = await profileService({
        controller: controller.signal,
      });
      setData(responseApi);
    }

    fetchData();

    return () => {
      controller.abort();
    };
    
  }, []);

  const filterData = { ...data };

  return {
    filterData,
  };
}
