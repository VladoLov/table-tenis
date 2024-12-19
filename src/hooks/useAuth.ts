import { useUser } from "@clerk/nextjs";

export function useAuth() {
  const { isSignedIn, user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";
  return { isSignedIn, isAdmin };
}
