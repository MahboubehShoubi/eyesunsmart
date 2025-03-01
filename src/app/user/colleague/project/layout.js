import ColleaguePage from "@/template/ColleaguePage";

function Colleaguelayout({ children }) {
  return (
    <>
      <ColleaguePage />
      <div>{children}</div>
    </>
  );
}

export default Colleaguelayout;
