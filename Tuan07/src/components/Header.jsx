import React from 'react';

// const Header = () => {
//   return (
//     <div className="p-4 flex justify-between items-center bg-white shadow-md">
//       {/* Tiêu đề */}
//       <p className="font-bold text-pink-500 text-2xl">Dashboard</p>

//       {/* Thanh tìm kiếm + icon */}
//       <div className="flex items-center gap-4">
//         <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full border border-gray-300">
//           {/* Icon kính lúp */}
//           <img
//             src="/Search.png" // thay bằng đường dẫn đúng
//             alt="Search"
//             className="w-4 h-4 text-gray-500"
//           />
//           {/* Ô tìm kiếm */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent px-3 text-sm focus:outline-none"
//           />
//         </div>

//         {/* Các icon khác */}
//         <img src="/Bell 1.png" alt="Notifications" className="w-6 h-6" />
//         <img src="/Question 1.png" alt="Help" className="w-6 h-6" />
//         <img src="/Avatar (5).png" alt="User" className="w-8 h-8 rounded-full" />
//       </div>
//     </div>
//   );
// };

// export default Header;


const Header = () => {
  return (
      <div className="grid grid-cols-6 items-center gap-4 bg-white bg-opacity-80 p-4 border-b border-gray-300">
          {/* Tiêu đề Dashboard */}
          <h1 className="col-span-3 text-2xl font-bold text-pink-500">Dashboard</h1>

          {/* Ô tìm kiếm */}
          <div className="col-span-2 flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
              {/* Icon kính lúp */}
              <img src="\Search.png" alt="" />
              {/* Ô tìm kiếm */}
              <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent px-4 text-base focus:outline-none"
              />
          </div>

          {/* Biểu tượng */}
          <div className="col-span-1 flex justify-end items-center space-x-4">
              {/* Hình chuông */}
              <button className="text-gray-500 hover:text-gray-700">
                  <img src="\Bell 1.png" alt="" />
              </button>
              {/* Dấu chấm hỏi */}
              <button className="text-gray-500 hover:text-gray-700">
                  <img src="\Question 1.png" alt="" />
              </button>
              {/* Avatar */}
              <img
                  src="\Avatar 313.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
              />
          </div>
      </div>
  );
};

export default Header;