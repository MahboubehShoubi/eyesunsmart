import AddProjectPage from '@/template/AddProjectPage';
import React from 'react'

function Edit({params : {projectId}}) {
  return (
   <AddProjectPage data={projectId} />
  )
}

export default Edit;
