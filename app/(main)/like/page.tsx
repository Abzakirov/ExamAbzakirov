import Likes from "@/components/likes/Likes";

const LikedProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Favorite Products</h1>
      <Likes />
    </div>
  );
};

export default LikedProductsPage;
