const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }
      return handleContact(request);
    }

    // Static files are served by the assets binding before this Worker
    // ever runs. Anything reaching here didn't match a real file.
    return new Response("Not Found", { status: 404 });
  },
};

async function handleContact(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const { name, email, phone, message } = body || {};

  if (!name || !email || !message) {
    return json({ error: "Name, email, and project details are required." }, 400);
  }

  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  // No email/CRM integration is configured yet — log the lead for now.
  console.log("[contact] new lead:", { name, email, phone, message });

  return json({ ok: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
