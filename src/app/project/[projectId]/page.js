import ProjectDetailsPage from "@/template/ProjectDetailsPage";

function projectDetails({ params: { projectId } }) {
  return <ProjectDetailsPage data={projectId} />;
}

export default projectDetails;
