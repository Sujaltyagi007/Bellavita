import React,{useState} from 'react'
export default function ItemVeiw({data}) {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(1);
    const [showLightbox, setShowLightbox] = useState(false);
  
    const thumbnails = [
      `${data.image}`,
      `${data.image}`,
      `${data.image}`,
      `${data.image}`
    ];
  
    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () =>
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen p-5">
      <section className="flex gap-32 min-h-[570px] items-center">
        {/* Image Gallery */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Main Image */}
            <div className="relative">
              <img
                src={`${data.image}`}
                alt="Main product"
                className="max-w-full max-h-[445px] rounded-lg cursor-pointer"
                onClick={() => setShowLightbox(true)}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`w-[90px] h-[90px] rounded-lg cursor-pointer ${
                    activeImage === index
                      ? "border-2 border-orange-500 opacity-30"
                      : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={`${thumb}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-orange-500 text-lg uppercase ">{data.category}</h3>
          <h2 className="text-4xl my-4">{data.title}</h2>
          <p className="text-gray-600 mb-8">
            {data.description}
          </p>

          {/* Price Info */}
          <div className="flex items-center gap-6 mb-8">
            <div className="text-2xl font-semibold">
              <span className="text-black">${data.price*quantity}</span>
              <span className="bg-orange-100 text-orange-500 px-2 rounded-full ml-4 font-bold">
                50%
              </span>
            </div>
            <div className="text-lg text-gray-500 line-through">${data.price*2*quantity}</div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-6">
            {/* Quantity Counter */}
            <div className="flex gap-3 items-center border border-gray-300 rounded-lg px-4 py-2">
              <button
                onClick={decrementQuantity}
                className="text-xl text-orange-500"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="text-xl text-orange-500"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex items-center justify-center cursor-pointer bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg gap-3 hover:bg-orange-600">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="relative max-w-[445px]">
            <span
              className="absolute top-0 right-0 text-white p-4 cursor-pointer"
              onClick={() => setShowLightbox(false)}
            >
              X
            </span>
            <img
              src={`images/${images[activeImage]}`}
              alt="Product"
              className="max-w-full max-h-[445px] rounded-lg"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
              <svg
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#fff"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#fff"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
