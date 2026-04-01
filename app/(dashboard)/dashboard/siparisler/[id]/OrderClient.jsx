import React from "react";

const OrderClient = ({ order }) => {
  if (!order) {
    return (
      <div className="p-8 text-center text-gray-500">Sipariş bulunamadı.</div>
    );
  }

  const product = order.Product;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Alıcı Bilgileri */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
          Alıcı Bilgileri
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-400 block">Ad Soyad</span>
            {order.name} {order.lastname}
          </div>
          <div>
            <span className="font-medium text-gray-400 block">
              T.C. Kimlik No
            </span>
            {order.identityNumber || "-"}
          </div>
          <div>
            <span className="font-medium text-gray-400 block">Telefon</span>
            {order.tel || "-"}
          </div>
          <div>
            <span className="font-medium text-gray-400 block">
              Şehir / İlçe
            </span>
            {order.city} {order.district ? `/ ${order.district}` : ""}
          </div>
          <div className="col-span-2">
            <span className="font-medium text-gray-400 block">Adres</span>
            {order.adres || "-"}
          </div>
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
          Ürün Bilgileri
        </h2>
        {product ? (
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="col-span-2">
              <span className="font-medium text-gray-400 block">Ürün Adı</span>
              {product.name || "-"}
            </div>
            <div>
              <span className="font-medium text-gray-400 block">Durum</span>
              {product.condition || "-"}
            </div>
            <div>
              <span className="font-medium text-gray-400 block">Fiyat</span>
              {product.price != null
                ? `${Number(product.price).toLocaleString("tr-TR")} ₺`
                : "-"}
            </div>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Ürün bilgisi bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default OrderClient;
