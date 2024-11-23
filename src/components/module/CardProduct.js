import Image from "next/image";

function CardProduct({ data: { image, name, description, color } }) {
  return (
    <div className="w-full h-fit flex">
      <div className="w-1/4 h-[300px]">
        <Image
          src={image}
          width={1000}
          height={700}
          alt="Image Product"
          className=" object-fill w-full h-full"
        />
      </div>
      <div className="w-3/4 h-[300px] flex flex-col justify-between px-5 py-10">
        <div className="flex ">
          <p className="w-[13%] text-secondery">نام محصول : </p>
          <p className="w-[87%] h-fit">{name} </p>
        </div>
        <div className="flex">
          <p className="w-[13%] text-secondery">توصیحات : </p>
          <p className="w-[87%] h-fit">{description}</p>
        </div>
        <div className="flex">
          <p className="w-[13%] text-secondery">رنگ : </p>
          <p className="w-[87%] h-fit">{color}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
