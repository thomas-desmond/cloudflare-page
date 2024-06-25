
const redirectToCloudflare = async (context) => {
  const url = new URL(context.request.url)
  if (url.pathname === "/cloudflare") {
    const destinationURL = "https://cloudflare.com";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
  }
  return context.next()
};

export const onRequest = [redirectToCloudflare];