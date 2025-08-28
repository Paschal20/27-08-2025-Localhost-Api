import React from "react";

interface Props {
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  _id?: number;
  phonenumber: number;
  bios: string;
  firstname: string;
}

const Card: React.FC<Props> = ({
  middlename,
  lastname,
  email,
  password,
  firstname,
  username,
  _id,
  bios,
}) => {
  return (
    <div
      key={_id}
      className="shadow-sm p-5 rounded-md flex flex-col gap-4 items-center"
    >
      <div className="text-center rounded-md w-full h-40 bg-blue-600 flex items-center justify-center text-4xl ">
        {username}
      </div>
      <div className="flex gap-2 shadow-sm p-3 font-bold ">
        <div>{firstname}</div>
        <div>{middlename}</div>
        <div>{lastname}</div>
      </div>

      <div className="text-justify">{bios} Console Him</div>
      <div className="text-blue-600 font-bold">{email}</div>
      <div className="truncate block w-full">
        <span className="font-bold">Password:</span> {password}
      </div>
    </div>
  );
};

export default Card;
