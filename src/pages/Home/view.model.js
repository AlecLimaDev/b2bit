import { useEffect, useState } from "react";
import { profileService } from "../../services/profile";

export default function HomeViewModel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responseApi = await profileService();
      setData(responseApi);
    }

    fetchData();
  }, []);

  const filterData = { ...data };

  return {
    filterData,
  };
}
