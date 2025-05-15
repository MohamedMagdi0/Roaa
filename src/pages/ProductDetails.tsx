import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    name: "Product Name",
    description:
      "Product description goes here. This is a detailed description of the product.",
    price: 299.99,
    images: [
      "/product-1.jpg",
      "/product-2.jpg",
      "/product-3.jpg",
      "/product-4.jpg",
    ],
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-bold">${product.price}</div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to={`/product-reservation?id=${id}`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
