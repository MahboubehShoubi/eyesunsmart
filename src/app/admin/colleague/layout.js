import AdminUserPage from "@/template/AdminUserPage";

function AdminCustomerlayout({children}) {
  return (
    <>
      <AdminUserPage />
      <div>{children}</div>
    </>
  );
}

export default AdminCustomerlayout;
