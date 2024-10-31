import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashboardPage from "@/template/DashboardPage";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  return (
    <DashboardPage role={user.role} createdAt={user.createdAt}/>  
  );
}

export default Dashboard;
