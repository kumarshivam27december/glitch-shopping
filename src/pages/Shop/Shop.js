import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100">
      <Breadcrumbs title="Products" className="text-pink-600" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full bg-yellow-50 border-r-4 border-pink-300">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 bg-white shadow-lg rounded-lg p-4 border border-green-200">
          <ProductBanner 
            itemsPerPageFromBanner={itemsPerPageFromBanner} 
            className="bg-gradient-to-b from-green-100 to-yellow-100 p-2 rounded-md"
          />
          <Pagination 
            itemsPerPage={itemsPerPage} 
            className="bg-pink-50 p-2 rounded-md border border-yellow-300"
          />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
