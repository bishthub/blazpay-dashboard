// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import bgImage from "../assets/dashboard_bg.png";
// import { ethers } from "ethers"; // Import the ethers.js library
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import SearchBar from "./SearchBar";
// import Profilecards from "./Profilecards";

// const Mynft = () => {
//   const [details, setDetails] = useState({ total: 0, content: [] });
//   const { id } = useParams();
//   // const [details, setDetails] = useState([]);

//   async function MetaWalletDetails() {
//     try {
//       const ids = "0xca1257ade6f4fa6c6834fdc42e030be6c0f5a813";
//       const datas = await axios.get(
//         `http://localhost:3000/api/nftScan/get-user-data/${ids}`
//       );

//       if (datas.status === 200) {
//         setDetails(datas.data);
//         console.log(details);
//       } else {
//         console.log("error");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     MetaWalletDetails();
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         color: "white",
//       }}
//       className="min-h-screen"
//     >
//       <Navbar />

//       <div className="flex flex-col items-center justify-center w-full">
//         {/* <SearchBar items={details.content} /> */}
//         <SearchBar items={details.content.map((item) => item.contract_name)} />

//         <div className="flex flex-col items-center justify-center w-full gap-5 p-3">
//           <h1 className="w-full mr-auto" style={{ fontSize: "1.5rem" }}>
//             My Items
//           </h1>
//           <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//             {details?.content.map((item, idx) => {
//               return (
//                 <Profilecards
//                   id={idx}
//                   img={item.nftscan_uri}
//                   name={item.contract_name}
//                   t_id={item.token_id}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mynft;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/dashboard_bg.png";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import Profilecards from "./Profilecards";

const Mynft = () => {
  const [details, setDetails] = useState({ total: 0, content: [] });
  const { id } = useParams();

  async function MetaWalletDetails() {
    try {
      const ids = "0xca1257ade6f4fa6c6834fdc42e030be6c0f5a813";
      const datas = await axios.get(
        `http://localhost:3000/api/nftScan/get-user-data/${ids}`
      );

      if (datas.status === 200) {
        setDetails(datas.data);
        console.log(details);
        console.log(datas.data);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const [filteredItems, setFilteredItems] = useState([]); // New state to hold filtered items

  const token = localStorage.getItem("token");

  useEffect(() => {
    MetaWalletDetails();
  }, []);

  const handleFilter = (filteredItems) => {
    setFilteredItems(filteredItems);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className="min-h-screen"
    >
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full">
        {/* <SearchBar items={details.content} onFilter={handleFilter} /> */}
        <div className="flex flex-col items-center justify-center w-full gap-5 p-3">
          <h1 className="w-full mr-auto" style={{ fontSize: "1.5rem" }}>
            My Items
          </h1>
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {details.content.map((item, idx) => {
              return (
                <Profilecards
                  key={idx}
                  img={item.nftscan_uri}
                  name={item.contract_name}
                  t_id={item.token_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynft;
