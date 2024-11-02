import Link from "next/link";

function DashboardPage({role , createdAt}) {
  return (
    <>
      {role === "ADMIN" ? (
        <div>
          <h3 className="text-[1.5rem]">سلام ادمین عزیز ❤️</h3>
          <p className="bg-bgRed text-textWhite p-2 mt-3">
            در پنل ادمین با استفاده از گزینه{" "}
            <Link
              href="/admin/products/add"
              className="border-[1px] border-textWhite rounded-lg px-2 mx-1 w-fit text-grayTisAir hover:text-textWhite"
            >
              افزودن محصولات{" "}
            </Link>
            میتوانید محصولات خود را وارد کنید
          </p>
        </div>
      ) : (
        <div>
          <h3 className="text-[1.5rem]">سلام کاربر گرامی ❤️</h3>
          <div className="w-fit flex gap-x-3 bg-navyBlue text-textWhite py-2 px-4 mt-3">
            <p>تاریخ عضویت : </p>
            <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardPage;
