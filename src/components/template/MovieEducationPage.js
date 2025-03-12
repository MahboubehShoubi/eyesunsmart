function MovieEducationPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <h3
        className="text-textWhite px-5 py-2 text-[1.7rem] w-full "
        style={{
          backgroundImage: `linear-gradient(to left,#898989 , #898989,transparent 100% )`,
        }}
      >
        فیلم های آموزشی
      </h3>

      <p>درود کاربر گرامی</p>
      <p className="">
        در اینجا شما می توانید فیلم های آموزشی در مورد کار با پنل ها را ببینید
      </p>
      <div className="w-full flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-[22.5%] border-2 h-[350px]"></div>
        <div className="w-full sm:w-[22.5%] border-2 h-[350px]"></div>
        <div className="w-full sm:w-[22.5%] border-2 h-[350px]"></div>
        <div className="w-full sm:w-[22.5%] border-2 h-[350px]"></div>
      </div>
    </div>
  );
}

export default MovieEducationPage;
