"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const project = formData.get("project")?.toString().trim();

  if (!name || !email || !project) {
    return {
      status: "error",
      message: "Name, email, and a short project brief are required.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Use a valid business email so I can reply quickly.",
    };
  }

  // Placeholder for sending email / CRM capture
  await new Promise((resolve) => setTimeout(resolve, 450));

  console.info("Contact request", { name, email, company, project });

  return {
    status: "success",
    message: "Received. Expect a fast reply within one business day.",
  };
}
