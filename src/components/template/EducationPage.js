function EducationPage() {
  return (
    <div>
      <h3
        className="text-textWhite px-5 py-2 text-[1.7rem] w-full "
        style={{
          backgroundImage: `linear-gradient(to left,#898989 , #898989,transparent 100% )`,
        }}
      >
        ثبت نام / خرید دوره ای آموزشی
      </h3>
      <p className="mt-5 text-textGray">
        به زودی شما می توانید در این سایت برای ثبت نام در
        <span className="text-bgRed text-[1.1rem] mx-1"> دوره‌های حضوری </span> و همچنین <span className="text-bgRed text-[1.1rem] mx-1"> دوره‌های آنلاین </span>
        اقدام کنید
      </p>
    </div>
  );
}

export default EducationPage;
