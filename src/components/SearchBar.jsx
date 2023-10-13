// import React, { useState } from "react";

// const SearchBar = ({ items }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Filter items based on the search query (contract_name)
//     const filtered = items.filter((item) =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredItems(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearch}
//         className="text-black"
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";

const SearchBar = ({ items, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter items based on the search query (contract_name)
    const filtered = items.filter((item) =>
      item.contract_name.toLowerCase().includes(query.toLowerCase())
    );
    onFilter(filtered); // Call the callback to update the filtered items in Mynft
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
