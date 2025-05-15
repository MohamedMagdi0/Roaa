import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Mock products data
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 199.99,
      image: "/product-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      price: 299.99,
      image: "/product-2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      price: 399.99,
      image: "/product-3.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Category {id}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-primary">
                  ${product.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
