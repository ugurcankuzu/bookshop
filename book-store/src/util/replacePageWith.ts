export default function replacePageWith(pageNumber: number, url: string) {
  const urlForm = new URL(url);
  if (urlForm.pathname === "/shop") {
    const newSearchParams = new URLSearchParams();
    const category = urlForm.searchParams.get("category");
    newSearchParams.set("page", pageNumber.toString());
    if (category) {
      newSearchParams.set("category", category);
    }
    urlForm.search = newSearchParams.toString();
    return urlForm.toString();
  } else {
    urlForm.pathname = "/shop";
    return urlForm.toString();
  }
}
