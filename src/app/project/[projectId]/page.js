import ProjectDetailsPage from "@/template/ProjectDetailsPage";

function projectDetails() {
  const projectData = {
    id: "01",
    projectType: "ویلایی",
    projectArea: "200",
    numberOfFloors: "1",
    description:
    "پیشرفت پروژه این پروژه با طراحی و امکانات منحصر بفرد و عالی با ۳۳۷۱۲ مترمربع زیربنا کل و زیربنای خالص مسکونی ۱۸،۷۸۴ مترمربع در ۱۳ طبقه (۳ طبقه زیرزمین، همکف و ۹ طبقه روی همکف) در یکی از بهترین مناطق شمال تهران در زمینی به مساحت ۷،۸۴۴ مترمربع شامل ۱۴۵ واحد مسکونی به صورت مشارکتی با شرکت سرمایه‌گذاری و ساختمانی تجارت ساخته شده است. این پروژه از شمال به بزرگراه صدر، از طریق خیابان دولت به خیابانهای شریعتی و بزرگراه صیاد شیرازی دسترسی دارد.",
    projectLocation: "ساری",
    projectProgress: "80",
    imageList: [
      "/image/example/img-(6).jpg",
      "/image/example/img-(1).jpg",
      "/image/example/img-(2).jpg",
      "/image/example/img-(3).jpg",
      "/image/example/img-(4).jpg",
      "/image/example/img-(5).jpg",
    ],
  };

  return <ProjectDetailsPage data={projectData} />;
}

export default projectDetails;
