// import React, { useState } from "react";
// import './uploaded.css';

// const UploadedTable = () => {
//   const [tableData, setTableData] = useState([
//     { id: 1, link: "www.google.com", prefix: "Tag 1", tags: ["tag1"] },
//     // Add more data as needed
//   ]);

//   const handleTagSelection = (id, selectedTags) => {
//     setTableData((prevData) =>
//       prevData.map((row) =>
//         row.id === id ? { ...row, tags: selectedTags } : row
//       )
//     );
//   };

//   const handleTagRemoval = (id, tagToRemove) => {
//     setTableData((prevData) =>
//       prevData.map((row) =>
//         row.id === id ? { ...row, tags: row.tags.filter((tag) => tag !== tagToRemove) } : row
//       )
//     );
//   };

//   return (
//     <div className="uploaded-table">
//       <table>
//         <thead>
//           <tr>
//             <th>S.No.</th>
//             <th>Links</th>
//             <th>Prefix</th>
//             <th>Add tags</th>
//             <th>Select tags</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row) => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.link}</td>
//               <td>{row.prefix}</td>
//               <td>
//                 <input type="text" placeholder="Enter tags" />
//               </td>
//               <td>
//                 <div className="selected-tags">
//                   {row.tags.map((tag) => (
//                     <div key={tag} className="tag">
//                       {tag}
//                       <span
//                         onClick={() => handleTagRemoval(row.id, tag)}
//                         className="remove-tag"
//                       >
//                         x
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UploadedTable;
