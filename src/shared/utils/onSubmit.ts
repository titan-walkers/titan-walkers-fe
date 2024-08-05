"use server";

export const onSubmit = async (prevState: any, formData: FormData) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    return response.json();
  } catch (err) {
    console.error(err);
    return { message: null };
  }

  // if (shouldRedirect) {
  //   redirect("/home"); // try/catch문 안에서 X
  // }
};
