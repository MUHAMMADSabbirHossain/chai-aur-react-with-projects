import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState({});
  const data = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/MUHAMMADSabbirHossain")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-2xl font-bold bg-gray-600 text-white text-center p-4">
      Github Followers:{data?.followers ? data?.followers : "Please Try Again."}
      <img
        src={data?.avatar_url}
        alt=""
        className="mx-auto rounded-2xl w-xs my-4"
      />
    </div>
  );
}

export default Github;

export async function githubInfoLoader() {
  const response = fetch("https://api.github.com/users/MUHAMMADSabbirHossain");

  return (await response).json();
}
