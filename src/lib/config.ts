export const config = {
  email: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
  api: process.env.NEXT_PUBLIC_API_URL!,
};
