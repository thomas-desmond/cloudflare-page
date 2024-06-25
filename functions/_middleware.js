const cookieName = "ab-test-cookie"
const newHomepagePathName = "/test"

const redirectToCloudflare = async (context) => {
  const url = new URL(context.request.url)
  if (url.pathname === "/cloudflare") {
    context.response = {
        status: 302,
        headers: {
            "Location": "https://cloudflare.com"
        }
    };
    return;
  }
  return context.next()
};

export const onRequest = [redirectToCloudflare];