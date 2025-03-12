function CustomerPage({CustomerId}) {
  return (
    <div>
      <p>درود </p>
      <p>به صفحه باشگاه مشتریان خوش آمدید</p>
      <p>
        در این صفحه شما می توانید تمام اطلاعات مربوط به پزوژه خود را مشاهده کنید
      </p>
      <div className="w-full flex shadow-2xl mt-5 p-5 rounded-[10px]">
        <div className="w-full sm:w-1/2 flex flex-col gap-y-5">
          <p className="text-textGray">نام کارفرما : <span className="text-[#000] text-[1.1rem]">آقای بذری</span></p>
          <p className="text-textGray">مکان پروژه : <span className="text-[#000] text-[1.1rem]"> مازندران - چالوس</span></p>
          <p className="text-textGray">دانلود فاکتور : </p>
          <p className="text-textGray">امتیاز شما : </p>
          <p className="text-textGray">دانلود فایل BackUp :</p>
        </div>
        <div className="w-full sm:w-1/2 border-2"></div>
      </div>
    </div>
  );
}

export default CustomerPage;
