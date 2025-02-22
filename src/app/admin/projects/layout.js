import AdminProjectSettingPage from "@/template/AdminProjectSettingPage";

function AdminProjectlayout({ children }) {
  return (
    <>
      <AdminProjectSettingPage />
      <div>{children}</div>
    </>
  );
}

export default AdminProjectlayout;
