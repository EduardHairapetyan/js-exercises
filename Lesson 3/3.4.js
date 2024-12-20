processArguments = (args) => {
    isEmail = (arg) => arg.includes("@") && arg.includes(".") && arg.indexOf("@") < arg.lastIndexOf(".");
    isLink = (arg) => arg.startsWith("http://") || arg.startsWith("https://");
 
    emails = args.filter(isEmail);
    links = args.filter(isLink);
    linkNames = links.map(link => ({ link, name: link.split('/').pop() }));
 
   return { emails, linkNames };
 };
 
  args = ["test@example.com", "https://example.com/page", "user@domain.org", "http://site.com/resource"];
  result = processArguments(args);
 console.log(result);
 