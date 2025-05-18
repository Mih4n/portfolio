```cs
using Mih4n.About;

public class AboutViewer
{
    public About View()
        => new About()
        {
            Nick = "Mih4n",
            Name = "Mikhail",
            Surname = "Loseu",
        }
}
```