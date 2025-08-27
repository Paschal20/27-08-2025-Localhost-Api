import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

interface Users {
  _id: number;
  middlename: string;
  lastname: string;
  phonenumber: number;
  email: string;
  password: string;
  username: string;
}
interface Data {
  getUsers: Users[];
}

const Api = () => {
  const [data, setData] = useState<Data | null>(null);

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

  return (
    <div className="grid grid-cols-3 gap-4">
      {data &&
        data.getUsers.map((e) => (
          <Card
            key={e._id}
            _id={e._id}
            middlename={e.middlename}
            username={e.username}
            email={e.email}
            phonenumber={e.phonenumber}
            lastname={e.lastname}
            password={e.password}
          />
        ))}
    </div>
  );
};

export default Api;
