import { IoAdd, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";

function CartItemCard({ image, quantity, total, id }) {
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <div className="w-full grid grid-cols-4 items-center">
      <img src={image} alt="" className="h-[100px] w-[100px]" />

      <p>{quantity}</p>

      <p>
        &#8358;
        {Number(total).toLocaleString({
          style: "currency",
          currency: "NGN",
        })}
      </p>

      <div className="flex items-center gap-4">
        <div className="gap-2 flex items-center">
          <button
            onClick={() => updateItemQuantity(id, quantity + 1)}
            className="bg-[#ddd8d8] py-2 rounded-full px-5"
          >
            <IoAdd />
          </button>
          <button
            onClick={() => {
              if (quantity > 1) {
                updateItemQuantity(id, quantity - 1);
              }
            }}
            className="bg-[#ddd8d8] py-2 rounded-full px-5"
          >
            <IoRemove />
          </button>
        </div>

        <button
          href=""
          className="hover-underline"
          onClick={() => {
            const confirm = window.confirm("Are you sure you want to remove?");
            if (confirm) {
              removeItem(id);
            }
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
