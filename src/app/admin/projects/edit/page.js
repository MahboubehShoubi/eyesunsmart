import EditProjectPage from '@/template/EditProjectPage'
import React from 'react'

function EditProject() {

  const projectList = [
    {
      id:"01",
      mployerFullName:"بهادر کاشیان",
      employerPhone:"09112223333",
      projectType: "ویلایی",
      projectLocation: "ساری",
      area:"350",
      numberOfFloors:"2",
      projectProgress:"100",
      description: "فول هوشمند و همراه با استخر و روف گاردن تمام هوشمند",
      imageList: [
        "/image/example/img-(1).jpg",
        "/image/example/img-(2).jpg",
        "/image/example/img-(3).jpg",
        "/image/example/img-(4).jpg",
        "/image/example/img-(5).jpg",
        "/image/example/img-(6).jpg",
        "/image/example/img-(7).jpg",
        "/image/example/img-(8).jpg",
        "/image/example/img-(3).jpg",
        "/image/example/img-(1).jpg",
        "/image/example/img-(9).jpg",
        "/image/example/img-(10).jpg",
      ],
    },
    {
      id:"02",
      mployerFullName:"سجاد بذری",
      employerPhone:"09124445555",
      projectType: "آپارتمان",
      projectLocation: "چالوس",
      area:"170",
      numberOfFloors:"1",
      description: "فول هوشمند و همراه با استخر و روف گاردن تمام هوشمند",
      projectProgress:"80",
      imageList: [
        "/image/example/img-(7).jpg",
        "/image/example/img-(8).jpg",
        "/image/example/img-(3).jpg",
        "/image/example/img-(1).jpg",
        "/image/example/img-(9).jpg",
        "/image/example/img-(10).jpg",
      ],
    },
  ];

  return (
    <EditProjectPage projectsData={projectList}/>
  )
}

export default EditProject
