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
    <div key={_id} className="shadow-sm p-5 rounded-md">
      <div className="text-center rounded-md py-2 w-1/2 bg-blue-600">{username}</div>
      <div className="flex gap-2">
        <div>{firstname}</div>
        <div>{middlename}</div>
        <div>{lastname}</div>
      </div>

      <div>{bios}</div>
      <div>{email}</div>
      <div>{password}</div>
    </div>
  );
};

export default Card;
