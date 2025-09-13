import { redirect } from "next/navigation";

function AccountPage() {
  return redirect("/account/signin");
}

export default AccountPage;
