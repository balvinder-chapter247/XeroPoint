export const Prefix = (res) => {
  const shortCode = res[0].role.shortCode;
  if (["SUPER_ADMIN", "ADMIN"].includes(shortCode)) return "/ad";
  if (["USER"].includes(shortCode)) return "/cd";
  if (["GUEST"].includes(shortCode)) return "/gd";
};
