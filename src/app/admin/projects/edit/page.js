import EditProjectPage from '@/template/EditProjectPage'
import React from 'react'

function EditProject() {

  const projectList = [
    {
      id:"01",
      projectType: "ویلایی",
      projectLocation: "ساری",
      description: "فول هوشمند و همراه با استخر و روف گاردن تمام هوشمند",
      imageList: [
        "/image/example/img-(1).jpg",
        "/image/example/img-(2).jpg",
        "/image/example/img-(3).jpg",
        "/image/example/img-(4).jpg",
        "/image/example/img-(5).jpg",
        "/image/example/img-(6).jpg",
      ],
    },
    {
      id:"02",
      projectType: "آپارتمان",
      projectLocation: "چالوس",
      description: "فول هوشمند و همراه با استخر و روف گاردن تمام هوشمند",
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