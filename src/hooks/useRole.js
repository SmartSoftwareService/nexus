export const useRole = () => {
  const role = localStorage.getItem("role");

  return {
    isAdmin: role === "admin",
    isTeacher: role === "teacher",
    isUser: role === "user",
  };
};
