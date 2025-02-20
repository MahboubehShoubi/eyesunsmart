import AdminUserPage from "@/template/AdminUserPage";

function AdminUserlayout({ children }) {
  return (
    <>
      <AdminUserPage />
      <div>{children}</div>
    </>
  );
}

export default AdminUserlayout;
