import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NotFound = () => {
  const { state } = useLocation();
  return (
    <div className="container py-5">
      <img
        className="img-fluid rounded"
        src="https://static.vecteezy.com/system/resources/previews/004/639/366/original/error-404-not-found-text-design-vector.jpg"
        alt=""
      />
      <p className="text-center fs-3 my-3">Üzgünüz, Sayfa bulunamadı</p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Anasayfa
        </Link>
      </div>

      {state && (
        <p className="fs-3 text-center my-4">
          Hata kodunuz <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
