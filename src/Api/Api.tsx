import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

interface Users {
  _id: number;
  middlename: string;
  lastname: string;
  firstname: string;
  phonenumber: number;
  email: string;
  password: string;
  username: string;
  bios: string;
}
interface Data {
  getUsers: Users[];
}

const Api = () => {
  const [data, setData] = useState<Data | null>(null);
  const [searchItem, setSearchItem] = useState("");
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<Users>();

  const handleSelected = (id: number) => {
    const cardFound = filteredData.find((e) => e._id === id);

    if (!cardFound) {
      throw new Error("No selected Card");
    } else {
      setSelected(cardFound);
      const handleModal = () => {
        setModal(modal === false ? true : false);
      };
      handleModal();
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Data>(
          "http://localhost:3400/api/getall"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error, "error fetching data");
      }
    };
    fetchProduct();
  }, []);

  if (data === null) {
    return;
  }
  const responseData = data.getUsers;
  const filteredData = responseData.filter((user) =>
    (user.username + user.firstname)
      .toLowerCase()
      .includes(searchItem.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center">
      <input
        className="h-10 border m-10 p-5 rounded-sm border-gray-200 text-gray-600"
        placeholder="Search...."
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        {data !== null &&
          filteredData.map((e) => (
            <div onClick={() => handleSelected(e._id)}>
              <Card
                key={e._id}
                middlename={e.middlename}
                username={e.username}
                email={e.email}
                phonenumber={e.phonenumber}
                lastname={e.lastname}
                password={e.password}
                bios={e.bios}
                firstname={e.firstname}
              />
            </div>
          ))}
      </div>
      {modal && selected && (
        <div
          onClick={() => setModal(false)}
          className="bg-gray-300/80 inset-0 fixed flex items-center justify-center bg-opacity-{2}"
        >
          <div
            onClick={() => setModal(false)}
            className="bg-blue-600 p-5 break-normal w-2xl rounded-md"
          >
            {selected.bios}
          </div>
        </div>
      )}
    </section>
  );
};

export default Api;
