import React from "react";

interface Props {
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  _id: number;
  phonenumber: number;
}

const Card: React.FC<Props> = ({
  middlename,
  lastname,
  email,
  password,
  username,
  _id,
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div
        key={_id}
        className="flex flex-col w-[300px] rounded-md mt-6 shadow-2xl"
      >
        <div>{middlename}</div>

        <div className="p-3 w-full">
          <h1 className="border border-gray-400 w-30 p-1 rounded-sm">
            {lastname}
          </h1>
          <p className="rounded-sm p-3 mb-3 mt-3 border border-gray-200 h-auto">
            {email}
          </p>
          <div className="flex justify-between">
            <p className="border border-gray-400 w-30 p-1 rounded-sm">
              {password}
            </p>
            <p className="border border-gray-400 w-30 p-1 text-green-900 text-2xl rounded-sm">
              {username}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
