# injects fonts.css into proposal.html -> proposal.final.html
import io
with open("fonts.css","r") as f: fonts = f.read()
with open("proposal.html","r") as f: html = f.read()
html = html.replace("/*__FONTS__*/", fonts)
with open("proposal.final.html","w") as f: f.write(html)
print("built proposal.final.html", len(html)//1024, "KB")
