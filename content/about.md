```cs
using Mih4n.About;

public class AboutViewer
{
    public About View()
        => new About()
        {
            Name = "Mikhail",
            Secondname = "Loseu",
            About = ""
            Images = [
                ::lines
                    ![image](/img/test)
                ::
            ]
        }
}
```